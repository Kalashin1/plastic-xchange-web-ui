import { FC, FormEvent, useState } from "react";
import Appbar from "../components/Appbar";
import Button from "../components/Button";
import HeaderText from "../components/Header";
import Input from "../components/Input";
import { updateUserAddress } from "../helper";
import { useNavigate } from "react-router";
import { lgaList } from "../states";
import Select from "../components/Select";

const keys = Object.keys(lgaList).map(k => ({ label: k, value: k }))
const states = [
  ...keys
];

const UpdateAddress: FC = () => {

  const navigate = useNavigate();

  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [lga, setLga] = useState('');
  const [state, setState] = useState('')
  const [lgas, setLgas] = useState(lgaList.Abia.map(l => ({ label: l, value: l })))

  function updateState(state: string) {
    setState(state)
    //@ts-ignore
    setLgas(lgaList[state].map((l: string) => ({ label: l, value: l })))
  }

  const updateAddress = async (e: FormEvent) => {
    e.preventDefault();
    const id = localStorage.getItem('userId')!;
    const token = localStorage.getItem('userToken')!;
    const [message, err] = await updateUserAddress(
      id,
      token,
      { state, street, zip, lga, country: 'Nigeria' }
    )

    if (err) {
      // TODO: handle error
      // console.log(err)
    } else {
      alert(message)
      navigate('/profile')
    }
  }


  return (
    <section>
      <Appbar />
      <div className="flex justify-center h-screen items-center flex-col">
        <div className="my-4">
          <HeaderText text="Update Your Address" />
        </div>

        <form
          className="border-red-500 w-full md:w-2/4 px-6"
          onSubmit={updateAddress}
        >
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

          <Select
            data={states}
            defaultV={state}
            label="State"
            updateV={updateState}
          />

          <Select
            data={lgas}
            defaultV={lga}
            label="LGA"
            updateV={setLga}
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