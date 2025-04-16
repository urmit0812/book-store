// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { RouterProvider } from 'react-router-dom';
// import router from './routers/router.jsx';
// import AuthProvider from './contects/AuthProvider.jsx';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
   

//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';
import AuthProvider from './contects/AuthProvider.jsx';
import  CartProvider from './Cart/CartContext.jsx'; // Import CartProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider> {/* Wrap the app with CartProvider */}
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
