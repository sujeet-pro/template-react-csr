import { Link } from 'react-router'
import type { Route } from './+types/products._index'

export async function clientLoader() {
  const response = await fetch('https://fakestoreapi.com/products')
  const productsData = (await response.json()) as Product[]
  return { products: productsData }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Products Landing' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function ProductsLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <ul>
        {loaderData.products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
