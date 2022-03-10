import "../styles/productCard.css"

import * as images from "../imageIndex.js";

const ProductCard = (props) => {

    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <img alt={props.name} src={images[props.image]}></img>
        </div>
    )
}

export default ProductCard