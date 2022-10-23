import { FC } from "react";
import Appbar from "../components/Appbar";
import HeaderText from "../components/Header";
import ProfileCard from '../components/Profile-Card';
import BankCard from "../components/Bank-Card";
import AddressCard from '../components/Address-Card';
import FooterNav from "../components/Footer-Nav";

const Profile: FC = () => {
  return (
    <section>
      <Appbar />

      <div className="pt-8 mb-8">
        <div className="text-left pl-8">
          <HeaderText text="Hello, John Doe" />
        </div>
        <div
          className="border-red-500 w-full md:w-2/4 px-6"
        >
          <ProfileCard 
            name=""
            email=""
            username=""
            phoneNumber=""
          />

          <BankCard 
            account="1234567890"
            bank="UBA"
          />

          <AddressCard 
            lga="Port Harcourt"
            street="No 42 Amadi Street, Odili Road"
            zip="100231"
            state="Rivers"
          />
        </div>
      </div>
      <FooterNav />
      </section>
  )
};


export default Profile;