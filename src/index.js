import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {tabs} from './reducer/home-tab-reducers'
import App from './component/App'


require('./css/bootstrap.css')


const defaultState = {

productCat : ['COSMETIC','PERFUME','OTHER'],
cosmeticProducts : [{
    id: 1, name: 'X1', desc: 'Only for Women'},
    {
    id: 1, name: 'X1', desc: 'Only for Women'}
   ]
} ;


const store = createStore(tabs, defaultState)

render(
    <Provider store ={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
