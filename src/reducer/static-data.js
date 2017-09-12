const staticData = (state = {}, action) => {
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
    const newstate = state.products.map((product) => {return{...product, incart: false}});
    return {products: newstate};
}

const persistState = (state, index) => {
    const newstate = state.products.map(product =>
        (product.id === index) ? {...product, incart: !product.incart} : product
    );
    return {products: newstate};
}

export default staticData

