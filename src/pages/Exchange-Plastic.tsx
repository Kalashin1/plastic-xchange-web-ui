import { FC, FormEvent, useEffect, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import FooterNav from "../components/Footer-Nav";
import Select from "../components/Select";
import { getPlastics, getAgentUsers, createPlasticExchange, getUser } from "../helper";
import { PlasticTypeInterface, UserInterface } from "../types";
import { useNavigate } from "react-router";

const ExchangePlastic: FC = () => {
  const navigate = useNavigate()
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('');
  const [plastics, setPlastics] = useState<PlasticTypeInterface[]>([]);
  const [agentUser, setAgentUsers] = useState<UserInterface[]>([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getPlasticTypes = async () => {
      const userToken = localStorage.getItem('userToken')!;
      const userId = localStorage.getItem('userId')!;
      const [_plast, err] = await getPlastics(userToken);
      const [agent, ] = await getUser(userToken);
      if(agent.type === "USER"){
        alert('User cannot exchange plastic')
        navigate('Profile')
      }
      if (!err) {
        const [_res, _err] = await getAgentUsers(userToken, userId);
        if (!_err) {
          console.log(_res)
          setAgentUsers(_res);
          setUser(_res[0]._id!)
        } else {
          console.log(_err)
        }
        setPlastics(_plast);
        setType(_plast[0].type)
      }
    }

    getPlasticTypes()
  }, [])

  const createXchange = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken')!
    const [ data, err ] = await createPlasticExchange({
      agent: localStorage.getItem('userId')!,
      customer: user,
      type,
      weight: parseInt(weight),
    }, token)

    if (!err) {
      console.log(data)
      alert('Exchage logged!')
      navigate('/dashboard');
    }
  }


  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Exchange Plastic" />
        <form 
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={createXchange}
        >

          <Select
            data={plastics.map((p) => ({ label: p.type, value: p.type }))}
            defaultV={type}
            updateV={setType}
            label="Select Plastic"
          />

          <Input
            label="Weight"
            defaultV={weight}
            updateV={setWeight}
            placeHolder="300kg"
            type="text"
          />

          <Select
            data={agentUser.map((p) => ({ label: p.username, value: p._id! }))}
            defaultV={user}
            updateV={setUser}
            label="Select HouseHold"
          />


          <div className="flex justify-center my-8">
            <Button label="Exchange Plastic" />
          </div>

        </form>
      </div>
      <FooterNav />
    </section>
  )
};

export default ExchangePlastic;