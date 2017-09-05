const loadProducts = (state =[], action) => {
    switch(action.type){
        case 'LOAD_PRODUCTS':
            return [...state]
        default :
            return state
    }
}

export default loadProducts