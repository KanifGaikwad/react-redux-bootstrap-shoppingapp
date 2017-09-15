import activeButtonId from '../reducer/button-reducer'
import soldlist from './sale-reducers'
import staticData from '../reducer/static-data'
import cartlist from '../reducer/cart-reducer'
import filterstring from '../reducer/filter-reducer'

import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    activeButtonId,
    soldlist,
    cartlist,
    filterstring,
    staticData
})

export default rootReducer