import './HomePage.css'
import { Header } from '../../components/Header';
//import { products } from '../../starting-code/data/products'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart, loadCart }) {
  const [products, setProduct] = useState([])


  console.log("initial products")
  console.log(products)


  // useEffect(()=>{
  //     axios.get("/api/products").then((response)=>{
  //     setProduct(response.data)
  //     console.log("inside axios")
  //     console.log(response.data);
  //   });

  // },[])

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProduct(response.data);
    };

    getHomeData();
  }, [])

  return (
    <>
      {console.log("homeHTML")}
      {console.log(products)}
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}