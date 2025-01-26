import { BrowserRouter, Route, Routes } from 'react-router'
import { Root, RootLoader } from './root'
import { NotFound } from './not-found'
import { Home } from './home'
import { ProductSearch, ProductDetails } from './product'
import { FC } from 'react'

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} loader={RootLoader}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductSearch />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
