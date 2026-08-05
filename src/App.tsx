import './App.css'
import {  Route, Routes } from 'react-router-dom';

import Signup from './Components/Signup';
import Home from './Components/Home';
function App() {
  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  )
}

export default App
