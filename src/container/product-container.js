import { connect } from 'react-redux'
import ProductList from '../component/Products'
import {addtosoldlist, checkfilterproduct} from "../action/product-actions";

const mapStateToProps = (state) => ({
    products :  state.staticData[0].products
})

const mapDispatchToProps = (dispatch) => ({
    addtosoldlist : (id, name, price) => {
        dispatch(addtosoldlist(id, name, price))
        dispatch(checkfilterproduct(id))
    }
})

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default Products