const soldlist = (state =[], action) => {
    switch(action.type){
        case 'ADD_TO_SOLD_LIST':
            return [...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price
                }
            ]
        default :
            return state
    }
}

export default soldlist