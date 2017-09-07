const checkedproductindex = (state = -1, action) => {
    switch (action.type) {
        case 'CHECK_PRODUCT':
            return action.id
        default :
            return state
    }
}

export default checkedproductindex