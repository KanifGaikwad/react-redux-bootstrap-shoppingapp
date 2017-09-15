import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducer/index'
import App from './component/App'
import thunk from 'redux-thunk'

require('./css/bootstrap.css')
require('./css/sticky-footer-navbar.css')
require('./css/theshop.css')


const generateProducts = (number) => {
    let returnObject= [];
    for(let i=0; i< number; i++){
        returnObject.push({
            id: i,
            name: 'PRODUCT No '+i,
            desc: 'This product can be used by'+ i,
            price: i+10,
            incart: false })
    }
    return returnObject;
}


const defaultState = {
    staticData: {
        products: generateProducts(1000)
    }
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
