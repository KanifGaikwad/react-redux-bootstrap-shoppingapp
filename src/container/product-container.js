import { connect } from 'react-redux'
import ProductList from '../component/Products'

const mapStateToProps = (state) => ({
    products :  state.staticData[0].products
})

const mapDispatchToProps = (dispatch) => ({

})

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default Products