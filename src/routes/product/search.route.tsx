import { useSearchParam } from '@/hooks/use-searchparam.hook'
import { Link, Outlet } from 'react-router-dom'
import { useProductsSearch } from './use-products.hook'
import { useDebounce } from '@/hooks/use-debounce'

export function ProductSearch() {
  const [searchQuery, setSearchQuery] = useSearchParam('q')
  const debouncedSearchQuery = useDebounce(searchQuery, 50)
  const { data, error, loading } = useProductsSearch(debouncedSearchQuery)
  return (
    <div>
      <h1>Product Search</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <input
            value={searchQuery || ''}
            onChange={e => setSearchQuery(e.target.value)}
            className="border-2 rounded-full w-full px-4 py-2"
            placeholder="Search Products"
            type="search"
          />
          {loading ? <div>Loading ...</div> : null}
          {error ? <div>Something went wrong</div> : null}
          <ul>
            {data?.products.map(product => (
              <li key={product.id} className="border my-2 p-2">
                <Link
                  to={`/products/${product.id}${searchQuery ? '?q=' + searchQuery : ''}`}
                  className="flex gap-6"
                >
                  <img
                    className="flex-none w-28 aspect-video object-cover"
                    src={product.thumbnail}
                  />
                  <span className="grow flex flex-col gap-2">
                    <span className="text-2xl">{product.title}</span>
                    <span>
                      ${product.price} | {product.rating} Stars
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
