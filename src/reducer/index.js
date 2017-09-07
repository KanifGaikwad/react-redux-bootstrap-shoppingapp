import activeButtonId from '../reducer/button-reducer'
import soldlist from './sale-reducers'
import staticData from '../reducer/static-data'
import checkedproductindex from '../reducer/product-reducer'
import cartlist from '../reducer/cart-reducer'

import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    activeButtonId,
    soldlist,
    checkedproductindex,
    cartlist,
    staticData
})

export default rootReducer