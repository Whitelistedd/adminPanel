import React from 'react';

import { Dashboard } from './pages/Dashboard/Dashboard';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import { Users } from './pages/Users/Users';

const App : React.FC =  () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
