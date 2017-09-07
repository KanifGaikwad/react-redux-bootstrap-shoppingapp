import { connect } from 'react-redux'
import Cart from '../component/Cart'
import { removefromcartlist , checkfilterproduct} from '../action/app-actions'

const mapStateToProps = (state) => ({
    products :  state.cartlist.list,
    total : state.cartlist.total
})

const mapDispatchToProps = (dispatch) => ({
    removeitemfromcartlist : (index, price) =>{
        dispatch(removefromcartlist(index, price))
        dispatch(checkfilterproduct(index))
    }
})

const CartList = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartList