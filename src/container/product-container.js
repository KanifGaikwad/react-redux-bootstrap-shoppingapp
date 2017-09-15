import { connect } from 'react-redux'
import ProductList from '../component/Products'
import { addtocartlist, checkfilterproduct, removefromcartlist, filterproductbykey} from "../action/app-actions";

const filterBySearch = (filterString, list) => {
    if(filterString === ''){
        return list;
    }
    return list.filter( product => product.name.indexOf(filterString) !== -1)
}

const mapStateToProps = (state) => ({
    products : filterBySearch( state.filterstring, state.staticData.products)
})

const mapDispatchToProps = (dispatch) => ({
    addtocart : (id, name, price, unchecked) => {
        dispatch(checkfilterproduct(id))
        if(unchecked){
            dispatch(removefromcartlist(id, price))
        }else{
            dispatch(addtocartlist(id, name, price))
        }
    },
    filterproducts: (filterString) => {
        dispatch(filterproductbykey(filterString))
    }
})

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default Products