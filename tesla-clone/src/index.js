import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ModelX from './pages/ModelX';
import CyberTruckPage from './pages/CyberTruckPage';
import HomePage from './pages/HomePage';
import ModelS from './pages/ModelS';
import Shop from './pages/Shop';
import { RecoilRoot } from 'recoil';
import CartPage from './pages/CartPage';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <HomePage/>
    </App>,
  },
  {
    path: "model_x",
    element: <App>
      <ModelX/>
    </App>,
  },
  {
    path: "cybertruck",
    element: <App>
      <CyberTruckPage/>
      </App>,
  },
  {
    path: "model_s",
    element: <App>
      <ModelS/>
      </App>,
  },
  {
    path:"shop",
    element: <App>
      <Shop/>
    </App>

  }
  ,
  {
    path:"cart",
    element: <App>
      <CartPage/>
    </App>
  }
  
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster />
    <RecoilRoot>
     <RouterProvider router={router} />
     </RecoilRoot>
  </React.StrictMode>
);

