import React from 'react'

function ProductList({ productList }) {
    return (
        <div>
            {productList.map((item, index) => (
                <div key={index}>
                    <h2>{item.attributes.title}</h2>
                </div>
            ))}
        </div>
    )
}
export default ProductList;