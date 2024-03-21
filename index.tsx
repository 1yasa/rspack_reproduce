import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import LazyElement from '@/components/LazyElement'
import Layout from '@/layout'

import type { RouteObject } from 'react-router-dom'

const routes: Array<RouteObject> = [
	{
		path: '/',
		element: <LazyElement path='A' />
	},
	{
		path: '/b',
		element: <LazyElement path='B' />
	},
	{
		path: '/c',
		element: <LazyElement path='C' />
	}
]

const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: routes
	}
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
