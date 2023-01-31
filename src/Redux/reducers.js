

function customreducer(state={user: null},action){
    switch(action.type){
        case "AddUser":
            return {
                ...state,
                user:action.payload.user,
            }
        default:
            return state;       
    }
}

export default customreducer;