import { connect } from 'react-redux'
import Header from '../component/Header'

const allProducts = (staticData) => {
  let {products} = staticData;
    return products;
}

const mapStateToProps = (state) => ({
    products :  state.staticData[0].products
})

const mapDispatchToProps = (dispatch) => ({

})

const Products = connect(mapStateToProps, mapDispatchToProps)(Header)

export default Products