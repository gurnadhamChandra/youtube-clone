import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "react-perfect-scrollbar/dist/css/styles.css";
import 'react-loading-skeleton/dist/skeleton.css'
import {Provider} from "react-redux";
import  {store}  from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

   
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
    </Provider>
    </QueryClientProvider>
    </Router>
  </StrictMode>,
)
