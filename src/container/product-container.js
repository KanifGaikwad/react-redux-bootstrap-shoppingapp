import { connect } from 'react-redux'
import ProductList from '../component/Products'
import { addtocartlist, checkfilterproduct, removefromcartlist} from "../action/app-actions";

const mapStateToProps = (state) => ({
    products :  state.staticData.products
})

const mapDispatchToProps = (dispatch) => ({
    addtocart : (id, name, price, unchecked) => {
        dispatch(checkfilterproduct(id))
        if(unchecked){
            dispatch(removefromcartlist(id, price))
        }else{
            dispatch(addtocartlist(id, name, price))
        }
    }
})

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default Products