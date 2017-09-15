import React from 'react'

const ProductsList = ({products, addtocart}) => {

  const product = (p) => {
      if(p === undefined){
          return(<div></div>);
      }
      return (
          <div className="list-group" key={p.id}>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">
                          <input className="form-check-input" type="checkbox" checked={p.incart}
                                 onClick={() => addtocart(p.id, p.name, p.price, p.incart)}>
                          </input>{p.name}
                      </h5>
                  </div>
                  <p className="mb-1">{p.desc}</p>
                  <small>{p.price} INR
                  </small>
              </a>
          </div>
      )
  }

    const prodrows = (products) => {
        var list = [];
        for (let i = 0; i < products.length; i=i+3) {
            {
                list.push(
                    <div className="row">
                        <div className="col-md-4">{product(products[i])}</div>
                        <div className="col-md-4">{product(products[i + 1])}</div>
                        <div className="col-md-4">{product(products[i + 2])}</div>
                    </div>
                )
            }
        }
        return list;
    }

    return (
        <div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item active"> Add Products to Cart</li>
            </ol>

            <div className='row custom-searchdiv-margin'>
                <div className="col-lg-6">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Go!</button>
                      </span>
                        <input type="text" className="form-control" placeholder="Search for..."></input>
                    </div>
                </div>
            </div>

            {prodrows(products)}
       </div>
    )
}

export default ProductsList