import { createBrowserRouter } from 'react-router-dom'
import { Root, RootLoader } from './root'
import { NotFound } from './not-found'
import { Home } from './home'
import { ProductSearch, ProductDetails } from './product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: RootLoader,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'products',
        element: <ProductSearch />,
        children: [{ path: ':id', element: <ProductDetails /> }],
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
