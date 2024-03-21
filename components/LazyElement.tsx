import { lazy, useMemo, Suspense } from 'react'

interface IProps {
	path: string
	props?: any
}

const Index = (_props: IProps) => {
	const { path, props } = _props

	const Component = useMemo(() => {
		return lazy(() => import(`@/modules/${path}`))
	}, [path])

	return (
		<Suspense>
			<Component {...props} />
		</Suspense>
	)
}

export default Index
