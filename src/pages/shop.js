import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";

const Shop = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productsFile = require("../products/products.json");
        const products = productsFile.products;
        setProducts(products)
    }, [])

  return (
    <div>
        <h1>Shop</h1> 
        {products.map(product => {
            return(
                <ProductCard key={product.id} name={product.name}/>
            )
        })}
    </div>
  );
}

export default Shop;
