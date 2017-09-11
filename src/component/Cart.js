import React from 'react';

const Cart = ({products,
                  removeitemfromcartlist,
                  total,
                  submitButtonStatus,
                  submitcartitem}) => {

    return (
        <div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item active">Cart item(s)</li>
            </ol>

            <table className="table">
                <thead className="thead-default">
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map(p =>
                    <tr key={p.id}>
                        <td>
                            <input defaultChecked type="checkbox" className="form-check-input" onClick={()=>removeitemfromcartlist(p.id, p.price)} />
                        </td>
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
                <span className="input-group-addon" id="basic-addon3"><input type="text" readOnly={true} value={total} className="form-control" id="basic-url" aria-describedby="basic-addon3"/></span>
                <span className="input-group-addon" id="basic-addon3"><button onClick={()=>submitcartitem(products, total)} type="button" className="btn btn-primary" disabled={submitButtonStatus}>Submit Order</button></span>
            </div>


        </div>
    )
}

export default Cart;