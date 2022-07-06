import React from 'react';

import { Dashboard } from './pages/Dashboard/Dashboard';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import { Users } from './pages/Users/Users';
import { Products } from './pages/Products/Products';
import { Orders } from './pages/Orders/Orders';

const App : React.FC =  () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/orders" element={<Orders />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
