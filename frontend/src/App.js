// import 'bootswatch/dist/lumen/bootstrap.min.css'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
