import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'

const targetElement = document.getElementById('root');

if (!targetElement) throw new Error("There are no root element");

createRoot(targetElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
