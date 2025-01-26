import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-lg font-semibold mb-4">This is a React template that uses the following technologies:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-600">React Router v7</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-600">Tailwind CSS v4</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-600">React v19</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-600">Configured with Vitest for testing</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-600">ESLint v9</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-600">Prettier</p>
        </div>
      </div>
      <p className="mt-4">This template enforces good practices and is opinionated. It preselects state management and routing libraries.</p>
      <p className="mt-2">
        It can be used for SSR, SSG, or CSR by configuring the <code>react-router.config</code> to enable/disable SSR and select pre-rendered paths.
      </p>
    </div>
  )
}
