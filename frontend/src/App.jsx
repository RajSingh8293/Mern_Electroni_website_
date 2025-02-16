
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
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ConfirmOrder from './pages/ConfirmOrder'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { profileUser } from './store/slices/userSlice'
import PrivateRoute from './protectedRoutes/ProtectedRoute'
import PaymentSuccess from './pages/PaymentSuccess'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(profileUser())
  }, [dispatch])

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
        <Route path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>}>
        </Route>
        <Route path="/payment-success/:id" element={<PaymentSuccess />} />
        <Route path="/my-orders" element={
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm-order" element={
          <ConfirmOrder />
        } />

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
