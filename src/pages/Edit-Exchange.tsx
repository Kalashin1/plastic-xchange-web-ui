import { FC, FormEvent, useEffect, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { getPlastics, getUser, getPlastic, editPlasticExchange } from "../helper";
import { PlasticTypeInterface } from "../types";
import { useNavigate, useParams } from "react-router";

const EditExchangePlastic: FC = () => {
  const { id } = useParams();

  const navigate = useNavigate()
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('');
  
  const [, setExchange] = useState();

  const [plastics, setPlastics] = useState<PlasticTypeInterface[]>([]);

  useEffect(() => {
    const getPlasticTypes = async (id: string) => {
      const userToken = localStorage.getItem('userToken')!;
      const [_plast, err] = await getPlastics(userToken);
      const [agent, ] = await getUser(userToken);

      if(agent.type === "USER"){
        alert('User cannot exchange plastic')
        navigate('/Profile')
      }

      if (!err) {
        const [_exchange, excErr] = await getPlastic(userToken, id)
        if (!excErr) {
          setExchange(_exchange.plastic)
        }
        setPlastics(_plast);
        setType(_plast[0].type)
      }
    }

    getPlasticTypes(id!)
  }, [id])

  const editXchange = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken')!
    const [ data, err ] = await editPlasticExchange({
      _id: id,
      type,
      weight: parseInt(weight),
    }, token)

    if (!err) {
      console.log(data)
      alert('Exchage Edited!')
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
          onSubmit={editXchange}
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

          <div className="flex justify-center my-8">
            <Button label="Exchange Plastic" />
          </div>

        </form>
      </div>
      {/* <FooterNav /> */}
    </section>
  )
};

export default EditExchangePlastic;