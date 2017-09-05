import activeButtonId from '../reducer/button-reducer'
import loadProducts from '../reducer/home-tab-reducers'
import staticData from '../reducer/static-data'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
     activeButtonId,
     loadProducts,
    staticData
})

export default rootReducer