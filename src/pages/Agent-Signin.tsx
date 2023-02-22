import { FC, FormEvent, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { CreateAccount } from "../helper";
import { useNavigate } from "react-router";

const AgentSignin: FC = () => {
  const [username, setUsername] = useState('')
  const [showUsernameError, setUsernameError] = useState(false)
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const SignIn = async (e: FormEvent) => {
    setUsernameError(false)
    e.preventDefault()
    const [data, err] = await CreateAccount({
      username,
      email,
      type: 'AGENT'
    })

    if (err) {
      // console.log(err)
      if (err.username) {
        setUsernameError(true);
      }
    } else {
      const [user, token] = data;
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', user._id);
      localStorage.setItem('username', user.username)
      // console.log(user)
      alert('Account created successfully, verify otp')
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
  }
  return (
    <section>
      <Appbar />
      <div 
        className="flex justify-center h-screen items-center flex-col"
      >
        <HeaderText text="Signin to your account" />

        <form 
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={e => SignIn(e)}
        >
          
          <Input
            label="Username"
            defaultV={username}
            updateV={setUsername}
            placeHolder="John_Doe_200"
            type="text"
            showError={showUsernameError}
            errorMessage="username already taken"
          />
          <Input 
            label="Email"
            defaultV={email}
            updateV={setEmail}
            placeHolder="john.doe@gmail.com"
            type="email"
          />
          <div className="flex justify-center my-8">

            <Button label="Sign in" />
          </div>
        </form>

        <p className="cursor-pointer" onClick={e => {navigate('/')}}>I am an user.</p>
      </div>
    </section>
  )
};

export default AgentSignin