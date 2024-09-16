import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
 

  return (
    <>
     
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
    </>
  )
}

export default App
