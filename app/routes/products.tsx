import { Link, Outlet } from 'react-router'
import type { Route } from './+types/products'

export async function clientLoader() {
  const response = await fetch('https://fakestoreapi.com/products')
  const productsData = (await response.json()) as Product[]
  return { products: productsData }
}

import { useState } from 'react'

export default function ProductsLayout({ loaderData }: Route.ComponentProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-80 p-4 border-r border-gray-300">
        <details className="lg:hidden" open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
          <summary className="cursor-pointer text-blue-500 hover:underline">Products</summary>
          <ul className="mt-4">
            {loaderData.products.map(product => (
              <li key={product.id} className="border-b border-gray-200 pb-2">
                <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <ul className="hidden lg:block space-y-2">
          {loaderData.products.map(product => (
            <li key={product.id} className="border-b border-gray-200 pb-2">
              <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  )
}
