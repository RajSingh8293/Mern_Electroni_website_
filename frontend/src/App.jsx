
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
// import Navbar from './comonents/Navbar'
// import Footer from './comonents/Footer'
import ProductDetail from './pages/ProductDetail'
import NoPage from './pages/NoPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MyOrders from './pages/MyOrders'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {


  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
