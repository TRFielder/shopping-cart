import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import Basket from "../components/basket";
import "../styles/shop.css"

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const productsFile = require("../products/products.json");
        const products = productsFile.products;
        setProducts(products);
    }, [])

    const addToBasket = (product) => {
        let newBasketItem = {
            name: product.name,
            price: product.price,
            id: product.id,
            quantity: 1
        }
        if(basket.some(item => item.name === newBasketItem.name)) {
            let indexToIncrement = basket.findIndex(item => item.name === newBasketItem.name)
            console.log(indexToIncrement)
            let newBasket = basket;
            newBasket[indexToIncrement].quantity++
            setBasket(newBasket)
        }
        if(!basket.some(item => item.name === newBasketItem.name)) {
            setBasket([...basket, newBasketItem]);
        }
    }

    const removeFromBasket = (product) => {
        console.log(product)
        let itemToFind = {
            name: product.name,
            price: product.price,
            id: product.id
        }

        let newBasket = basket;
        let indexToRemove = basket.findIndex(item => item.name = itemToFind.name);

        newBasket = newBasket.splice(indexToRemove, 1);
        setBasket(newBasket)
    }

  return (
    <div className="productMenu">
        <Basket contents={basket}/>
        {products.map(product => {
            return(
                <ProductCard key={product.id}
                name={product.name}
                description={product.description}
                price={`£${product.price}`}
                image={product.image}
                vegetarian={product.vegetarian}
                buyItem={() => addToBasket(product)}
                removeItem = {() => removeFromBasket(product)}
                />
            )
        })}
    </div>
  );
}

export default Shop;
