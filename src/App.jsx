
import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const fetchAppData = async () =>{
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data)
    }

    fetchAppData();
  
  },[])

   

  return (
    <Routes>
      <Route 
        path='/' 
        element={<HomePage cart={cart}/> }>
      </Route>
      <Route 
        path='checkout' 
        element={<CheckoutPage cart={cart} />}>
      </Route>
      <Route 
        path='orders' 
        element={<OrdersPage cart={cart}/>}>
      </Route>


    </Routes>
   
  )
}

export default App
