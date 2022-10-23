import { FC, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";

const UpdateBank: FC = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Update Your Profile" />
        <form className="border-red-500 w-full md:w-2/4 px-6">

          <Input
            label="Name"
            defaultV={name}
            updateV={setName}
            placeHolder="John Doe"
            type="text"
          />

          <Input 
            label="Phone Number"
            defaultV={phoneNumber}
            updateV={setPhoneNumber}
            placeHolder="0812346728"
            type="text"
          />

          <div className="flex justify-center my-8">
            <Button label="Update Profile" />
          </div>
          
        </form>
      </div>
    </section>
  )
};

export default UpdateBank