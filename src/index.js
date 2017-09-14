import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducer/index'
import App from './component/App'
import thunk from 'redux-thunk'

require('./css/bootstrap.css')
require('./css/sticky-footer-navbar.css')



const defaultState = {
    staticData: {
        products: [
            {
                id: 1, name: 'X1', desc: 'Only for Women', price: 20, incart: false
            },
            {
                id: 2, name: 'X2', desc: 'Only for Women', price: 30, incart: false
            },
            {
                id: 3, name: 'X3', desc: 'Only for Women', price: 40, incart: false
            },
            {
                id: 4, name: 'X4', desc: 'Only for Women', price: 20, incart: false
            },
            {
                id: 5, name: 'X5', desc: 'Only for Women', price: 30, incart: false
            },
            {
                id: 6, name: 'X6', desc: 'Only for Women', price: 40, incart: false
            },
            {
                id: 6, name: 'X7', desc: 'Only for Women', price: 40, incart: false
            }
        ]
    }
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
