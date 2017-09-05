
const activeButtonId = (state='', action) => {
    switch(action.type){
        case 'SET_ACTIVE_BUTTON' :
              return action.id
         default :
                return state
    }
}

export default activeButtonId