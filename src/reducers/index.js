const reducer = (state, action) => {
    console.log('reducer')
    console.log(action.id)
    console.log(action._result)
    switch(action.type){
        case 'TRANSFER':
            return {
                ...state, id:action.id
            }
        case 'AUTH_RESULT':
            return {
                ...state, returnVal:action._result
            }    
        default:
            return state
    }
};

export default reducer;