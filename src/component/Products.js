import React from 'react'

const ProductsList = ({products, addtosoldlist}) => {
    return (
        <div>

            <ol className="breadcrumb">
                <li className="breadcrumb-item active"> Add Products to Cart</li>
            </ol>

            <table className="table">
                <thead className="thead-default">
                <tr>
                    <th><input type="checkbox" className="form-check-input" onClick={()=>addtosoldlist()}/></th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(p =>
                        <tr key={p.id}>
                            <td>
                                <input checked={p.incart} type="checkbox" className="form-check-input" onClick={()=>addtosoldlist(p.id, p.name, p.price)} />
                            </td>
                            <td>
                                {p.name}
                            </td>
                            <td>
                                {p.desc}
                            </td>
                            <td>
                                {p.price} INR
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default ProductsList