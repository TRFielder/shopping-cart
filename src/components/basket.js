import { useState, useEffect } from "react"
import "../styles/basket.css";

const Basket = () => {
    const [items, setItems] = useState([
        {id: 1,
        name: "Tonkotsu",
        price: 12
        }
    ]);
    const [total, setTotal] = useState(13);

    return(
        <div className="basketDisplay">
            <h1>Total: {`£${total}`}</h1>
            {items.map(item => {
                return(
                    <div key = {item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Basket;