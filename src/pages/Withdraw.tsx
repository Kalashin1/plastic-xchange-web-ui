import { FC, FormEvent, useEffect, useState } from "react";
import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import FooterNav from "../components/Footer-Nav";
import { getUser, widthdraw } from "../helper";
import { useNavigate } from "react-router";

const Withdraw: FC = () => {

  const navigate = useNavigate()

  const [amount, setAmount] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken')!
    const fetchUser = async () => {
      const [_user, err] = await getUser(token);

      if (err) {
        // handle err
      } else {
        if (_user.type === 'USER' && !_user.agent) {
          navigate('/dashboard')
        }
      }
    }

    fetchUser()
  }, [])


  const makeWithdrawal = async (e: FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('userToken')!
    const id = localStorage.getItem('userId')!
    const [, err] = await widthdraw(token, parseInt(amount), id)

    if (!err) {
      alert('Withdrawal Request Logged')
    }
  }

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Withdrawal" />
        <form 
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={makeWithdrawal}
        >

          <Input
            label="Amount"
            defaultV={amount}
            updateV={setAmount}
            placeHolder="UBA"
            type="text"
          />

          <div className="flex justify-center my-8">
            <Button label="Withdraw" />
          </div>
          
        </form>
      </div>
      <FooterNav />
    </section>
  )
};

export default Withdraw;