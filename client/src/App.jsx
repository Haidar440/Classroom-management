
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';
function App() {
  return (
    
    <BrowserRouter>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
