const cartReducer = (state, action) => {
    switch (action.type) {
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "ADD_TO_CART":
            return { ...state, cart: action.payload };
        case "REMOVE_FROM_CART":
            return { ...state, cart: action.payload };
        case "UPDATE_CART":
            return { ...state, cart: action.payload };
        case "EMPTY_CART":
            return { ...state, cart: [] };
        default:
            return state;
    }
}

export { cartReducer };
