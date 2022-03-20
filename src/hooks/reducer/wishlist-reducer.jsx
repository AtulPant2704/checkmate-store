const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "GET_WISHLIST":
            return { ...state, cart: action.payload };
        case "ADD_TO_WISHLIST":
            return { ...state, cart: action.payload };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, cart: action.payload };
        default:
            return state;
    }
}

export { wishlistReducer };
