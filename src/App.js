
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import car_banner from './Components/Assets/car-banner.jpg'
import motor_banner from './Components/Assets/motor-banner.jpg'
import filter_banner from './Components/Assets/filter-banner.jpg'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/LUBFIL-E-commerce' element={<Shop/>}/>
        <Route path='/carOil' element={<ShopCategory banner={car_banner} category="carOil"/>}/>
        <Route path='/motorcycleOil' element={<ShopCategory banner={motor_banner} category="motorcycleOil"/>}/>
        <Route path='/filters' element={<ShopCategory banner={filter_banner} category="filters"/>}/>
        <Route  path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
