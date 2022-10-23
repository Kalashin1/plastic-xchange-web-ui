import { FC, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import FooterNav from "../components/Footer-Nav";

const ExchangePlastic: FC = () => {
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('')


  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Exchange Plastic" />
        <form className="border-red-500 w-full md:w-2/4 px-6">

          <Input
            label="Select Plastic Type"
            defaultV={type}
            updateV={setType}
            placeHolder="Type"
            type="text"
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
      <FooterNav />
    </section>
  )
};

export default ExchangePlastic;