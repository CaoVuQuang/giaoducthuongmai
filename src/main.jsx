import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/header.css'
import './styles/search&filter.css'
import './styles/productList.css'
import './styles/productCard.css'
import './styles/productModal.css'
import './styles/footer.css'
import './styles/favoriteList.css'
import './styles/suggestionList.css'
import './styles/viewedProduct.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
