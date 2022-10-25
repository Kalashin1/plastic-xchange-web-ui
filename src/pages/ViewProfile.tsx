import { FC, useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import HeaderText from "../components/Header";
import ProfileCard from '../components/Profile-Card';
import AddressCard from '../components/Address-Card';
import FooterNav from "../components/Footer-Nav";
import { UserInterface, USER_TYPE } from "../types";
import { getUserById } from "../helper";
import { useParams } from "react-router";

const UpdateProfile: FC = () => {

  type ParamPayload = {
    id: string;
    type: USER_TYPE;
  };

  const { id } = useParams<ParamPayload>();
  const [user, setUser] = useState<UserInterface>({} as UserInterface);

  useEffect(() => {
    const fetchUser = async (id: string) => {
      const [_user, err] = await getUserById(id);
      if (err) {
        console.log(err)
      } else {
        console.log(_user)
        setUser(_user)
      }
    }

    console.log(id)
    fetchUser(id!)
  }, [id])

  return (
    <section>
      <Appbar />

      <div className="pt-8 mb-8">
        <div className="text-left pl-8">
          <HeaderText text={`${user?.name}'s Profile`} />
        </div>
        <div
          className="border-red-500 w-full md:w-2/4 px-6"
        >
          <ProfileCard 
            name={user?.name ? user.name: ''}
            email={user?.email ? user.email : ''}
            username={user?.username ? user.username : ''}
            phoneNumber={user?.phoneNumber ? user.phoneNumber: ''}
          />

          <AddressCard 
            lga={user?.location?.lga}
            street={user?.location?.street.slice(0, 20)}
            zip={user?.location?.zip}
            state={user?.location?.state}
          />
        </div>
      </div>
      <FooterNav />
      </section>
  )
};


export default UpdateProfile;