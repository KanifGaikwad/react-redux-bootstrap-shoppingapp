import React from 'react'

const ProductsList = ({products}) => {
    return (
        <div>
            {products.map(p =>
                <div key={p.id}>{p.name}</div>
            )}
        </div>
    )
}

export default ProductsList