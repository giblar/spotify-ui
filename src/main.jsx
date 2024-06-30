import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/page/404.jsx';
import { LandingPage } from './components/page/LandingPage.jsx';
import { Search } from './components/mobile/layouts/search/Search.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/search",
    element: <Search/>,
    errorElement:<ErrorPage></ErrorPage>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
