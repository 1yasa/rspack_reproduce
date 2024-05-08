import { observer } from 'mobx-react-lite'
import { useLayoutEffect, useState } from 'react'

import Model from '../model'

const Index = () => {
	const [x] = useState(() => new Model())

	console.log(777)

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
				backgroundColor: 'blue',
				color: 'white'
			}}
			onClick={() => x.add()}
		>
			BBB ({x.count})
		</div>
	)
}

export default observer(Index)
