import { unstable_Activity as Activity, useEffect, useState, Fragment } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

import type { ReactElement } from 'react'

const Index = () => {
	const { pathname, key } = useLocation()
	const [cache_pages, setCachePages] = useState<Array<{ pathname: string; key: string; outlet: ReactElement }>>([])
	const outlet = useOutlet()

	console.log(cache_pages)

	useEffect(() => {
		const result = cache_pages.some(item => item.pathname === pathname)

		if (result) return

		setCachePages([...cache_pages, { pathname, key, outlet }])
	}, [cache_pages, pathname, key, outlet])

	return (
		<Fragment>
			<span>Cache pages</span>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginRight: 8 }}>
				{cache_pages.map(item => (
					<div style={{ minWidth: 120 }} key={item.key}>
						{item.outlet}
					</div>
				))}
			</div>
			{cache_pages.map(item => (
				<Activity key={item.key} mode={item.pathname === pathname ? 'visible' : 'hidden'}>
					{item.outlet}
				</Activity>
			))}
		</Fragment>
	)
}

export default Index
