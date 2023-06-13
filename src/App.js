import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Forms from './Component/Forms';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/forms' element={<Forms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
