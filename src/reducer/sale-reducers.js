const soldlist = (state = {list: [], soldTotal:0}, action) => {
    switch (action.type) {
        case 'ADD_TO_SOLD_LIST':
            return newState(state, action)
        default :
            return state
    }
}

const newState = (state, action) =>{
    let temp = [];
    state.list.map(e =>
        temp.push(e)
    )
    action.cartlist.map(cartitem =>
        temp.push({...cartitem, timestamp: new Date().toLocaleString()})
    );
    return {list: temp, soldTotal: (state.soldTotal+action.carttotal)};
}

export default soldlist