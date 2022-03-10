import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import "../styles/shop.css"

const Shop = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productsFile = require("../products/products.json");
        const products = productsFile.products;
        setProducts(products)
    }, [])

  return (
    <div className="productMenu">
        {products.map(product => {
            return(
                <ProductCard key={product.id}
                name={product.name}
                description={product.description}
                price={`£${product.price}`}
                image={product.image}
                />
            )
        })}
    </div>
  );
}

export default Shop;
