import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FooterNav = () => {

  const { pathname } = useLocation()

  const [currentRoute, setCurrentRoute] = useState(pathname)
  const navigate = useNavigate()

  const footerLinks = [
    {
      route: '/dashboard',
      icon: 'fas fa-home-alt'
    },
    {
      route: '/profile',
      icon: 'fas fa-user-alt'
    },
    {
      route: '/withdraw',
      icon: 'fas fa-credit-card'
    },
    {
      route: '/exchange',
      icon: 'fas fa-recycle'
    }
  ]
  return (
    <div className="py-3 fixed md:static -bottom-1 w-full mt-4 bg-white px-8">
      <ul className="flex justify-between md:hidden">
        {footerLinks && footerLinks.map((v, i) => (
          <li 
            key={i} 
            className="cursor-pointer"
            onClick={e => navigate(`${v.route}`)}
          >
            <span>
              <i 
                className={`${currentRoute === v.route ? 'text-green-400':  'text-green-800'} ${ v.icon} text-lg`}  
              />
            </span>
          </li>
        ))}
      </ul>

      <div
        className="mx-4 border-t border-green-100 hidden md:block text-center pt-6"
      >
        Copyright &copy; { new Date().getFullYear()}
      </div>
    </div>
  )
}

export default FooterNav;

