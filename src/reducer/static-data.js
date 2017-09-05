const staticData = (state = [], action) => {
    switch (action.type) {
        case 'CHECK_LIST':
            return persistState(state, action.id)
        default:
            return state
    }
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