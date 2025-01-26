import React from 'react'
import { NavLink } from 'react-router'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:underline">
              About
            </NavLink>
            <NavLink to="/products" className="hover:underline">
              Products
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-slate-600 text-white p-4 text-center">
        &copy; {currentYear} Sujeet Jaiswal. All rights reserved.
      </footer>
    </div>
  )
}

export default RootLayout
