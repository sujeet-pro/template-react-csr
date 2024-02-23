import { useParams } from 'react-router-dom'
import { useProduct } from './use-products.hook'

export function ProductDetails() {
  const { id } = useParams()
  const { data: product, loading, error } = useProduct(id)
  return (
    <section>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>Unable to fetch details...</div> : null}
      {product ? (
        <>
          <h2 className="text-3xl">{product.title}</h2>
          <div>
            {product.brand} | {product.category}
          </div>
          <div className="relative w-full flex gap-6 overflow-x-auto snap-x snap-proximity pb-10">
            {product.images.map(imgSrc => (
              <div key={imgSrc} className="snap-center shrink-0">
                <img src={imgSrc} className="w-11/12 aspect-video" />
              </div>
            ))}
          </div>
          <div>
            ${product.price} | Saving {product.discountPercentage}%
          </div>
          <div>
            Rating: {product.rating} Stars | Stock: {product.stock}
          </div>
          <p>{product.description}</p>
        </>
      ) : null}
    </section>
  )
}
