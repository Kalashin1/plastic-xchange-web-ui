import { FC, useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import HeaderText from "../components/Header";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import TransactionComponent from "../components/Transaction-Component";
import FooterNav from "../components/Footer-Nav";
import { getUserExchanges, getUser } from "../helper";
import { PlasticInterface, UserInterface } from "../types";

const Dashboard: FC = () => {

  const [user, setUser] = useState<UserInterface>({} as UserInterface)
  const [xchanges, setXchanges] = useState<PlasticInterface[]>()
  const [weight, setWeight] = useState<number>(0)

  useEffect(() => {
    const token = localStorage.getItem('userToken')!

    const getData = async () => {
      const [_user, err] = await getUser(token);
      if (!err) {
        setUser(_user);
        // console.log(_user)
        const [_exchanges, excErr] = await getUserExchanges(token, _user.username, _user.type) as [PlasticInterface[], string]
        if (!excErr) {
          // console.log(_exchanges[0])
          setXchanges(_exchanges)
          if ( _exchanges.length > 0 ) {
            const weight = _exchanges.map(e => e.weight).reduce((prev, current) => prev + current);
            setWeight(weight)
          }
        }
      }
    }

    getData()
  }, [])
  return (
    <section>
      <Appbar />

      <div className="pt-8">
        <div className="text-left pl-8">
          <HeaderText text={`Hello, ${user?.name}`} />
        </div>
        <div
          className="border-red-500 w-full md:w-2/4 px-6"
        >
          <Card 
            balance={user?.balance}
            weight={weight}
          />

          <div className="mt-16 w-full">
            <div className="text-left mb-6">
              <SubHeader text="Your Transactions" />
            </div>

            { xchanges && xchanges.map(((l, i) => (
              <TransactionComponent
                amount={l.price}
                date={l.createdAt!}
                _id={user.type === "AGENT" ? l.customer?._id! : l?.agent?._id! }
                transId={l._id}
                status={l.status}
                type={l.type}
                weight={l.weight}
                userType={user?.type}
                key={i}
              />
            )))}
            
          </div>
        </div>
      </div>
      <FooterNav />
    </section>
  )
};

export default Dashboard;