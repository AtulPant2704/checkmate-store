
const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return state;
        case "LOG_IN":
            return;
        case "LOG_OUT":
            return state;
        default:
            return state;
    }
}

export { authReducer };
