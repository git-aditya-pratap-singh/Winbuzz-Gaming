import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import Store from "./app/redux/store";
import AuthGuard from "./app/_guard/auth.guard";

createRoot(document.getElementById('root')).render(
  <AuthGuard>
    <Provider store={Store}>
      <App />
    </Provider>
  </AuthGuard>
  
)
