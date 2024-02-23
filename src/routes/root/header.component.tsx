import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

const links = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Products',
    to: '/products',
  },
  {
    text: 'Product Details',
    to: '/products/1',
  },
]
export function Header() {
  return (
    <header className="bg-slate-700 text-white p-5">
      <nav>
        <ul className="flex flex-row gap-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  clsx('p-4 hover:bg-slate-500', {
                    pending: isPending,
                    'bg-slate-900': isActive,
                    transitioning: isTransitioning,
                  })
                }
                to={link.to}
                end
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
