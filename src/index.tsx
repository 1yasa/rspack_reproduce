import { createRoot } from 'react-dom/client'
import { Stage } from 'react-konva'

const Index = () => {
	console.log(123)

	return <Stage></Stage>
}

createRoot(document.getElementById('root')).render(<Index></Index>)
