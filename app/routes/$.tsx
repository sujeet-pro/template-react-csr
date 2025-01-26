import { useParams } from 'react-router'
import type { Route } from './+types/$'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Page Not Found' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function NotFound() {
  const param = useParams()
  console.log(param)
  return <h1>404 page: Page Not found `/{param['*']}`</h1>
}
