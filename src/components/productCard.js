import "../styles/productCard.css"

const ProductCard = (props) => {

    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <img alt={props.name} src={require(""+ props.image)}></img>
        </div>
    )
}

export default ProductCard