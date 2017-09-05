import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index'
import App from './component/App'


require('./css/bootstrap.css')

const defaultState = {
    staticData: [
        {
            products: [
                {
                    id: 1, name: 'X1', desc: 'Only for Women'
                },
                {
                    id: 2, name: 'X1', desc: 'Only for Women'
                },
                {
                    id: 3, name: 'X3', desc: 'Only for Women'
                }
            ]
        },{
            daysale: [
                {
                    id: 1, name: 'P1', desc: 'Only for Women'
                },
                {
                    id: 2, name: 'P2', desc: 'Only for Women'
                },
                {
                    id: 3, name: 'P3', desc: 'Only for Women'
                }
            ]
        }
    ]
}



const store = createStore(rootReducer, defaultState)

render(
    <Provider store ={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
