import { FC, FormEvent, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { verifyOTP } from "../helper";
import { useNavigate } from "react-router";

const Otp: FC = () => {
  const navigate = useNavigate()

  const [otp, setOTP] = useState('')
  const [optError, setOTPError] = useState(false);

  const verify = async (e: FormEvent) => {
    e.preventDefault()
    setOTPError(false)
    try {
      const [data, err] = await verifyOTP(parseInt(otp), localStorage.getItem('username')!);

      if (err) {
        // handle error
        console.log(err)
        setOTPError(true)
      } else {
        alert('OTP verification successful')
        const [user, _] = data;
        if (!user.location) {
          navigate('/update-address')
        } else if (!user.bankInfo) {
          navigate('/update-bank')
        } else if (!user.name) {
          navigate('/update-profile')
        } else {
          navigate('/dashboard')
        }
      }
    } catch (error: any) {
      console.log(error)
    }
   
  }

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Verify OTP" />
        <form 
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={verify}
        >

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