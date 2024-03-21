import { observer } from 'mobx-react-lite'
import { useLayoutEffect, useState } from 'react'

import Model from './model'

const Index = () => {
	const [x] = useState(() => new Model())

	useLayoutEffect(() => {
		x.init()

		return () => x.off()
	}, [])

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: 'calc(100vh - 36px - 24px)',
				backgroundColor: 'red',
				color: 'white'
			}}
			onClick={() => x.add()}
		>
			AAA ({x.count})
		</div>
	)
}

export default observer(Index)
