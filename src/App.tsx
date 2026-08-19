import './App.css'
import {  Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Products from './Components/Products';
import Pricing  from './Components/Pricing';
function App() {
  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about"  element={<About/>} />
          <Route path="/products"  element={<Products/>} />
          <Route path="/Pricing" element={<Pricing/>} />
        </Routes>
    </>
  )
}

export default App
