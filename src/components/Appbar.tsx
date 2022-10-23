import { FC, useState } from "react";
import { useNavigate } from "react-router";

const Appbar: FC = () => {

  const links = [
    {
      route: 'dashboard',
      icon: 'fas fa-home-alt'
    },
    {
      route: 'profile',
      icon: 'fas fa-user-alt'
    },
    {
      route: 'withdraw',
      icon: 'fas fa-credit-card'
    },
    {
      route: 'exchange',
      icon: 'fas fa-recycle'
    }];
  const [showNav, updateShowNav] = useState(false);

  const navigate = useNavigate()

  return (
    <div
      className="bg-green-800 shadow-md py-4 px-8 flex justify-between flex-col w-ful"
    >
      <ul className="flex justify-between w-full">
        <li
          className="cursor-pointer"
          // eslint-disable-next-line no-restricted-globals
          onClick={e => { history.back() }}
        >
          <span>
            <i className="fas fa-arrow-left text-white" />
          </span>
        </li>
        <li className="hidden md:block cursor-pointer" onClick={e => updateShowNav(!showNav)}>
          <span>
            <i className="fas fa-bars text-white" />
          </span>
        </li>
      </ul>
      <ul>
        {showNav && links.map((l, i) => (
          <li className="my-3" key={i} onClick={e => navigate(`/${l.route}`)}>
            <span className="capitalize text-white space-x-2 cursor-pointer">
              <i className={`${l.icon} ml-2`} />
              <span className="mr-2">{l.route}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Appbar;