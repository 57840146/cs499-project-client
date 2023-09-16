import Header from './NavBar'
import { Route, Routes } from 'react-router'
import Prices from './pages/Prices/Prices'
import Products from './pages/Products/Products'
import Shoppingcart from './pages/ShoppingCart/ShoppingCart'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Prices" element={<Prices />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Shoppingcart" element={<Shoppingcart />}></Route>
      </Routes>
    </div>
  )
}

export default App
