import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { FaHouse } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

const links = [
  {
    text: 'Home',
    to: '/',
    icon: <FaHouse />,
  },
  {
    text: 'Products',
    to: '/products',
    icon: <FaSearch />,
  },
  {
    text: 'Product Details',
    to: '/products/1',
  },
]
export function Header() {
  return (
    <header className="bg-slate-700 text-white px-4 py-2">
      <nav>
        <ul className="flex flex-row gap-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  clsx(
                    'px-4 py-2 hover:bg-slate-500 flex flex-row gap-2 items-center',
                    {
                      pending: isPending,
                      'bg-slate-900': isActive,
                      transitioning: isTransitioning,
                    },
                  )
                }
                to={link.to}
                end
              >
                {link.icon}
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
