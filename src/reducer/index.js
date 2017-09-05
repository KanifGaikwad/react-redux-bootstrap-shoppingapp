import activeButtonId from '../reducer/button-reducer'
import soldlist from './sale-reducers'
import staticData from '../reducer/static-data'
import checkedproductindex from '../reducer/product-reducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
     activeButtonId,
    soldlist,
    checkedproductindex,
    staticData
})

export default rootReducer