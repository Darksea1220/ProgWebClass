import { createRoot } from 'react-dom/client'
import App from './src/App'
import './style.css'
const rootElement = document.querySelector('#root')
const root = createRoot(rootElement)
root.render(<App />)
