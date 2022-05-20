import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
