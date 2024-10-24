import ProductCard from "./ProductCard.jsx"

function ProductList({listData, layout}){

    return(
        <div>
            {listData.length === 0 ? <h3>No Product Available!</h3> : (
                <div className={`card-container ${layout === 'grid' ? 'grid-view' : 'list-view'}`}>
                    {listData.map((list, index)=>(
                        <div key={index}>
                            <ProductCard 
                                itemTitle = {list.itemTitle}
                                itemDescription = {list.itemDescription}
                                itemPrice = {list.itemPrice}
                            />
                        </div>
            ))}
                </div>
        )}
        </div>
    
       
    )
}

export default ProductList