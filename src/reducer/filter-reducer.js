const filterstring = (state='', action) => {
    switch(action.type){
        case 'FILTER_PRODUCTS' :
            return action.filterstring
        case  'CLEAR_FILTER' :
            return ''
        default :
            return state
    }
}

export default filterstring