import { useState } from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/logout"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <div className='min-h-screen'>
        <Outlet /> {/* This renders the nested routes */}
      </div>

      <MyFooter />
    </div>
  );
}

export default App;
