import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const [products,setProducts]= useState([])

  useEffect(()=>{
    fetch("products.json")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setProducts(data)
    })
  },[])
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>Our Products</h1>
      {products?.map(product=>{
        return <ProductCard key={product.model} product={product}></ProductCard>
      })}
    </div>
  );
};

export default Home;
