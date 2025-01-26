export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type ProductsResponse<T = Product> = {
  products: T[]
  total: 4
  skip: 0
  limit: 4
}
