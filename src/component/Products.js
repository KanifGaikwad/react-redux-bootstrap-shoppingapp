import React from 'react'
import UserC from "../container/user-list-container";
import UserMapC from "../container/user-map-container";

const ProductsList = ({products, addtocart, filterproducts}) => {
    return (
      <section>
          <ol className="breadcrumb">
              <li className="breadcrumb-item active">Near by friends</li>
          </ol>
          <section style={{float:"left", width:"30%"}}><UserC/></section>
          <aside style={{float:"left", width:"70%", height:"700px"}}><UserMapC/></aside>
      </section>
    )
}

export default ProductsList