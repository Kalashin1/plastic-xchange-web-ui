import { FC, FormEvent, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { updateBankInfo } from "../helper";
import { useNavigate } from "react-router";

const UpdateBank: FC = () => {
  const navigate = useNavigate()
  
  const [bank, setBank] = useState('')
  const [account, setAccount] = useState('');

  const updateInfo = async (e:FormEvent) => {
    e.preventDefault();
    const [ data, err ] = await updateBankInfo(
      localStorage.getItem('userId')!,
      localStorage.getItem('userToken')!,
      {
        bank,
        accountNumber: parseInt(account)
      }
    )

    if (err) {
      // handle error
      // console.log(err)
    } else {
      alert(data)
      // console.log(data)
      navigate('/profile')
    }
  }

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Update Your WIthdrawal Info" />
        <form 
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={updateInfo}
        >

          <Input
            label="Bank"
            defaultV={bank}
            updateV={setBank}
            placeHolder="UBA"
            type="text"
          />

          <Input 
            label="Account Number"
            defaultV={account}
            updateV={setAccount}
            placeHolder="0812346728"
            type="text"
          />

          <div className="flex justify-center my-8">
            <Button label="Update Withdrawal Info " />
          </div>

        </form>
      </div>
    </section>
  )
};

export default UpdateBank