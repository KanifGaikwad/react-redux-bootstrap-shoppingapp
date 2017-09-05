import React from 'react'

const SaleList = ({products}) => {
    return (
        <div>
            {products.map(p =>
                <div key={p.id}>{p.name}</div>
            )}
        </div>
    )
}

export default SaleList