import { useEffect, useState } from "react"
import "../styles/basket.css";

const Basket = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.contents)
    }, [props])

    const removeItem = props.removeItem;

    return(
        <div className="basketDisplay">
            <h1>Total: £{
            items.reduce(function(prev, cur) {
                return prev + cur.price * cur.quantity;
            }, 0
            )}</h1>
            {items.map(item => {
                return(
                    <div key = {item.id}>
                        <h2>{item.name}</h2>
                        <p>£{item.price}, Qty: {item.quantity}</p>
                        <button onClick={() => removeItem(item)}>-</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Basket;