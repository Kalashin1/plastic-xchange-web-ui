import { FC } from "react";
import Appbar from "../components/Appbar";
import HeaderText from "../components/Header";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import TransactionComponent from "../components/Transaction-Component";
import FooterNav from "../components/Footer-Nav";

const Dashboard: FC = () => {
  return (
    <section>
      <Appbar />

      <div className="pt-8">
        <div className="text-left pl-8">
          <HeaderText text="Hello, John Doe" />
        </div>
        <div
          className="border-red-500 w-full md:w-2/4 px-6"
        >
          <Card />

          <div className="mt-16 w-full">
            <div className="text-left mb-6">
              <SubHeader text="Your Transactions" />
            </div>
            <TransactionComponent />
            <TransactionComponent />
            <TransactionComponent />
            <TransactionComponent />
          </div>
        </div>
      </div>
      <FooterNav />
    </section>
  )
};

export default Dashboard;