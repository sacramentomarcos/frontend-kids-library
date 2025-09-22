import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MenuInicial from './pages/menuInicial'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuInicial />
  </StrictMode>,
)
