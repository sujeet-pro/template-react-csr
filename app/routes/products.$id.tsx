import type { Route } from './+types/products.$id'

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const productDetails = await response.json()
  return { productDetails: productDetails }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Products Details' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function ProductDetails({
  loaderData,
  params,
}: Route.ComponentProps) {
  const { productDetails } = loaderData
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Details - {params.id}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={productDetails.image}
          alt={productDetails.title}
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">
            {productDetails.title}
          </h2>
          <p className="text-gray-600 mb-4">{productDetails.description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-gray-800">
              ${productDetails.price}
            </span>
            <span className="text-sm text-gray-600">
              Category: {productDetails.category}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">
              {productDetails.rating.rate} Stars
            </span>
            <span className="text-gray-600">
              Rated by {productDetails.rating.count} users
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
