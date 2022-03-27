import { useState, useEffect } from "react"
import "../styles/basket.css";

const Basket = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(
            props => [...items, props.contents]
        )
    },[])

    return(
        <div className="basketDisplay">
            <h1>Total: £{
            props.contents.reduce(function(prev, cur) {
                return prev + cur.price * cur.quantity;
            }, 0
            )}</h1>
            {props.contents.map(item => {
                return(
                    <div key = {item.id}>
                        <h2>{item.name}</h2>
                        <p>£{item.price}, Qty: {item.quantity}</p>
                        <button onClick={props.removeItem}>-</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Basket;