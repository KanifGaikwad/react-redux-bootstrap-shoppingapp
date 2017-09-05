export const showproducts = () => ({
    type: 'LOAD_PRODUCTS'
})

export const setactivebutton = (tabid) =>({
    type: 'SET_ACTIVE_BUTTON',
    tabid
})

export const showtodayssale = () => ({
    type: 'LOAD_PRODUCTS'
})

export const addtosoldlist = (id, name, price) => ({
    type: 'ADD_TO_SOLD_LIST',
    id,
    name,
    price
})

export const checkproduct = (id) => ({
    type: 'CHECK_PRODUCT',
    id
})

export const checkfilterproduct = (id) => ({
    type: 'CHECK_LIST',
    id
})