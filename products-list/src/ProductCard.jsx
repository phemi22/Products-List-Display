
function ProductCard({itemTitle, itemDescription, itemPrice}){

    return(
        <div className="card-container">
            <div className="item-title-container">
                <h2>{itemTitle}</h2>
            </div>

            <div className="item-description-container">
                <p>{itemDescription}</p>
            </div>

            <div className="item-price-container">
                <h3>{itemPrice}</h3>
            </div>
        </div>
    )
}

export default ProductCard