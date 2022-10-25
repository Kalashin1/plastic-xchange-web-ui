import { FC, FormEvent, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { UpdateProfile as updateProfile } from "../helper";
import { useNavigate } from "react-router";

const UpdateProfile: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');

  const update = async (e: FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('userToken')!;
    const id = localStorage.getItem('userId')!;
    const [message, err] = await updateProfile(
      token,
      id,
      { name, phoneNumber }
    )

    if (err) {
      console.log(err)
    } else {
      console.log(message)
      navigate('/profile')
    }
  } 

  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <HeaderText text="Update Your Profile" />
        <form 
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={update}
        >

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

export default UpdateProfile;