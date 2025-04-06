import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './redux/store'; 
import App from './App.jsx'
import { Provider } from 'react-redux'
import { LanguageProvider } from './context/LanguageContext.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <LanguageProvider> 
       <App />
      </LanguageProvider> 
  </Provider>
)
