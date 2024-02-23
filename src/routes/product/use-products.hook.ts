import { useFetch } from "@/hooks/use-fetch.hook";
import { Product, ProductsResponse } from "./product.types";

export function useProductsSearch(query: string | null) {
    return useFetch<ProductsResponse<Pick<Product, 'id' | 'title' | 'price' | 'thumbnail' | 'rating'>>>(`https://dummyjson.com/products/search?q=${query || ''}&select=title,price,thumbnail,rating`)
}

export function useProduct(id: string | null | undefined) {
    return useFetch<Product>(id ? `https://dummyjson.com/products/${id}` : null)
}