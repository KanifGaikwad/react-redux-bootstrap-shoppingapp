const cartlist = (state = {list: [], total: 0}, action) => {
    if (action.type === 'ADD_TO_CART') {
        return {
            list: [
                ...state.list,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                }
            ],
            total: state.total + action.price
        }
    } else if (action.type === 'REMOVE_FROM_CART') {
        return {
            list: state.list.filter(element => element.id !== action.id),
            total: state.total - action.price
        };
    } else if(action.type === 'FLUSH_CART') {
        return {
            list: [],
            total: 0
        }
    }
    return state;
}

export default cartlist