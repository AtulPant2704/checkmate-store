
const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOG_IN":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOG_OUT":
            return {
                ...state,
                token: null,
                user: null
            };
        case "CHECK_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state;
    }
}

export { authReducer };
