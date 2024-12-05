import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ApiGoku from './ApiHomeGoku'
import {} from  './style.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
   <ApiGoku/>
  </StrictMode>,
)
