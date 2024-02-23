import { Outlet } from 'react-router-dom'
import { Header } from './header.component'
import { Footer } from './footer.component'

export function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
