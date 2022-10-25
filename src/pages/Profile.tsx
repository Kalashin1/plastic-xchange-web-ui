import { FC, useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import HeaderText from "../components/Header";
import ProfileCard from '../components/Profile-Card';
import BankCard from "../components/Bank-Card";
import AddressCard from '../components/Address-Card';
import FooterNav from "../components/Footer-Nav";
import { UserInterface } from "../types";
import { getUser } from "../helper";

const Profile: FC = () => {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);

  useEffect(() => {
    const token = localStorage.getItem('userToken')!
    const fetchUser = async () => {
      const [_user, err] = await getUser(token);

      if (err) {
        // handle err
        console.log(err)
      } else {
        setUser(_user)
      }
    }

    fetchUser()
  }, [])

  return (
    <section>
      <Appbar />

      <div className="pt-8 mb-8">
        <div className="text-left pl-8">
          <HeaderText text={`Hello, ${user?.name}`} />
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

          {
            user?.bankInfo && 
            (
              <BankCard 
                account={user?.bankInfo?.accountNumber?.toString()}
                bank={ user?.bankInfo?.bank}
              />
              )
          }

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


export default Profile;