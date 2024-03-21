import { NavLink } from 'react-router-dom'

import OffscreenOutlet from './components/OffscreenOutlet'

const Index = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					marginBottom: 8
				}}
			>
				<NavLink to='/' style={{ padding: '0 12px', height: 36, lineHeight: '36px' }}>
					A
				</NavLink>
				<NavLink to='/b' style={{ padding: '0 12px', height: 36, lineHeight: '36px' }}>
					B
				</NavLink>
				<NavLink to='/c' style={{ padding: '0 12px', height: 36, lineHeight: '36px' }}>
					C
				</NavLink>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<OffscreenOutlet></OffscreenOutlet>
			</div>
		</div>
	)
}

export default Index
