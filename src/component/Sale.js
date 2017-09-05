import React from 'react'

const SaleList = ({products}) => {
    return (
        <div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item active"> Today's Sold item</li>
            </ol>

            <table className="table">
                <thead className="thead-default">
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map(p =>
                    <tr key={p.id}>
                        <td>
                            {p.name}
                        </td>
                        <td>
                            {p.price} INR
                        </td>
                    </tr>
                )}

                </tbody>
            </table>

            <div className="input-group">
                <span className="input-group-addon" id="basic-addon3">Total</span>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>

        </div>
    )
}

export default SaleList