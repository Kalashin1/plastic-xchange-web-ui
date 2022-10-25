import { FC, FormEvent, useState } from "react";

import HeaderText from "../components/Header"
import Appbar from "../components/Appbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { CreateAccount } from "../helper";
import { useNavigate } from "react-router";

const Signin: FC = () => {
  const [isUser, setIsUser] = useState(true)
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
      type: isUser ? 'USER': 'AGENT'
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
      navigate('/otp')
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

            <Button label="Signin" />
          </div>
        </form>

        { isUser ?
          (<p onClick={e => setIsUser(false)}>I am an agent.</p>):
          (<p onClick={e => setIsUser(true)}>I am an user.</p>)
        }
      </div>
    </section>
  )
};

export default Signin