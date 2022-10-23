import { FC, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import FooterNav from "../components/Footer-Nav";

const Withdraw: FC = () => {
  const [amount, setAmount] = useState('');

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Withdrawal" />
        <form className="border-red-500 w-full md:w-2/4 px-6">

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