import { FC, useState } from "react";

import HeaderText from "../components/Header-Text";
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";

const Otp: FC = () => {
  const [otp, setOTP] = useState('')
  const [optError, setOTPError] = useState(false);

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Update Your WIthdrawal Info" />
        <form className="border-red-500 w-full md:w-2/4 px-6">

          <Input
            label="OTP"
            defaultV={otp}
            updateV={setOTP}
            placeHolder="UBA"
            type="text"
            errorMessage="Incorrect OTP"
            showError={optError}
          />

          <div className="flex justify-center my-8">
            <Button label="Verify OTP" />
          </div>
          
        </form>
      </div>
    </section>
  )
};

export default Otp;