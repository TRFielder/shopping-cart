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
        if(basket.some(item => item.name === newBasketItem.name)) { //Updates quantity of an item already in the basket
            let indexToIncrement = basket.findIndex(item => item.name === newBasketItem.name)
            let newBasket = basket;
            let newItem = newBasket[indexToIncrement]
            newItem.quantity++;
            setBasket(newBasket)
        }
        if(!basket.some(item => item.name === newBasketItem.name)) {
            setBasket([...basket, newBasketItem]);
        }
    }

    const removeFromBasket = (item) => {
        let itemToFind = {
            name: item.name,
            price: item.price,
            id: item.id
        }
        let newBasket = basket;
        newBasket = newBasket.filter(item => item.name !== itemToFind.name)

        setBasket([...newBasket])
    }

  return (
    <div className="productMenu">
        <Basket 
        contents={basket}
        removeItem = {(item) => removeFromBasket(item)}
        />
        {products.map(product => {
            return(
                <ProductCard key={product.id}
                name={product.name}
                description={product.description}
                price={`£${product.price}`}
                image={product.image}
                vegetarian={product.vegetarian}
                buyItem={() => addToBasket(product)}
                />
            )
        })}
    </div>
  );
}

export default Shop;
