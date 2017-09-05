
const activeButtonId = (state='PRODUCT', action) => {
    switch(action.type){
        case 'SET_ACTIVE_BUTTON' :
              return action.tabid
         default :
                return state
    }
}

export default activeButtonId