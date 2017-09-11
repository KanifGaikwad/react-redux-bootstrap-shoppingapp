import React from 'react'

const SaleList = ({solditem,
                      soldtotal}) => {

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
                    <th>Sold Time</th>
                </tr>
                </thead>
                <tbody>
                {solditem.map((p, index) =>
                    <tr key={index}>
                        <td>
                            {p.name}
                        </td>
                        <td>
                            {p.price} INR
                        </td>
                        <td>
                            {p.timestamp} IST
                        </td>
                    </tr>
                )}

                </tbody>
            </table>

            <div className="input-group">
                <span className="input-group-addon" id="basic-addon3">Today's Total</span>
                <input type="text" value={soldtotal} readOnly={true} className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
        </div>
    )
}

export default SaleList