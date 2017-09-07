export const setactivebutton = (tabid) => ({
    type: 'SET_ACTIVE_BUTTON',
    tabid
})

export const checkfilterproduct = (id) => ({
    type: 'CHECK_LIST',
    id
})

export const addtocartlist = (id, name, price) => ({
    type: 'ADD_TO_CART',
    id,
    name,
    price
})

export const removefromcartlist = (id, price) => ({
    type: 'REMOVE_FROM_CART',
    id,
    price
})
