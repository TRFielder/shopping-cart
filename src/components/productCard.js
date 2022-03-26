import "../styles/productCard.css"

import * as images from "../imageIndex.js";
import vegSymbol from "../images/menu/vegetarian-mark-60.png"

const ProductCard = (props) => {

    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.vegetarian ? <img src={vegSymbol}
                                        id="vegSymbol"
                                        alt="Vegetarian"></img>
                                        : ""}
            </p>
            <p>{props.price}</p>
            <img alt={props.name} src={images[props.image]}></img>
            <button onClick={() => console.log(`Clicked ${props.name}`)}>Add to basket</button>            
        </div>
    )
}

export default ProductCard