import { connect } from 'react-redux'
import Cart from '../component/Cart'
import {removefromcartlist, checkfilterproduct, addtosoldlist, flushproducts, flushcart} from '../action/app-actions'

const mapStateToProps = (state) => ({
    products :  state.cartlist.list,
    total : state.cartlist.total,
    submitButtonStatus: (state.cartlist.total===0)
})

const mapDispatchToProps = (dispatch) => ({
    removeitemfromcartlist : (index, price) =>{
        dispatch(removefromcartlist(index, price))
        dispatch(checkfilterproduct(index))
        },
    submitcartitem: (cartlist, carttotal) =>{
        dispatch(addtosoldlist(cartlist, carttotal))
        dispatch(flushproducts())
        dispatch(flushcart())
        }
})

const CartList = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartList