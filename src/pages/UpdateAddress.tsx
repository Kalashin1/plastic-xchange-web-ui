import { FC, useState } from "react";
import Appbar from "../components/Appbar";
import Button from "../components/Button";
import HeaderText from "../components/Header";
import Input from "../components/Input";

const UpdateAddress: FC = () => {
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [lga, setLga] = useState('');
  const [state, setState] = useState('')
  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <div className="my-4">
          <HeaderText text="Update Your Address" />
        </div>

        <form className="border-red-500 w-full md:w-2/4 px-6">
          <Input
            label="Street"
            defaultV={street}
            updateV={setStreet}
            placeHolder="No 32 Worlu Street"
            type="text"
          />

          <Input
            label="Zip"
            defaultV={zip}
            updateV={setZip}
            placeHolder="500102"
            type="text"
          />
          
          <Input
            label="state"
            defaultV={state}
            updateV={setState}
            placeHolder="Rivers"
            type="text"
          />

          <Input
            label="LGA"
            defaultV={lga}
            updateV={setLga}
            placeHolder="Port Harcourt"
            type="text"
          />
          
          <div className="flex justify-center my-8">

            <Button label="Signin" />
          </div>
        </form>
      </div>
    </section>
  )
};

export default UpdateAddress;