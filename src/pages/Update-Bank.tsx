import { FC, useState } from "react";

import HeaderText from "../components/Header-Text";
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";

const UpdateBank: FC = () => {
  const [bank, setBank] = useState('')
  const [account, setAccount] = useState('');

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Update Your WIthdrawal Info" />
        <form className="border-red-500 w-full md:w-2/4 px-6">

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