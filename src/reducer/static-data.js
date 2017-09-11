const staticData = (state = [], action) => {
    switch (action.type) {
        case 'CHECK_LIST':
            return persistState(state, action.id)
        case 'FLUSH_PRODUCTS' :
            return backtoinitial(state)
        default:
            return state
    }
}
const backtoinitial =(state) => {
    return [{
        products: state[0].products.map((product) => {return{...product, incart: false}})
    }]
}

const persistState = (state, index) => {
    let temp = state[0].products.map(product =>
        (product.id === index) ? {...product, incart: !product.incart} : product
    )
    return [{
        products: temp
    }]
}

export default staticData

