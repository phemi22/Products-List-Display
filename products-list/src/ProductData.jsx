import ProductList from "./ProductList.jsx"

function ProductData(){

    const listData = [
        {
            itemTitle: "Gucci Bag",
            itemDescription: "This is an original brown leather bag",
            itemPrice: "$700"
        },
        {
            itemTitle: "Luis Vuitton",
            itemDescription: "Great wear for great people",
            itemPrice: "$500"
        },
        {
            itemTitle: "Dolce & Gabbana",
            itemDescription: "Made specially for you",
            itemPrice: "$350"
        }
    ]

    return(
        <div>
            <ProductList listData={listData} layout="list" />
        </div>
    )
}

export default ProductData