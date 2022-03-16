const filterReducer = (state, action) => {
    const { chessPieces, chessBoard, chessBooks, chessClock, ratingValue, inStock, rangeValue } = action.payload;

    switch (action.type) {
        case "SORT_LOW_TO_HIGH":
            return { ...state, lowToHigh: true, highToLow: false };

        case "SORT_HIGH_TO_LOW":
            return { ...state, lowToHigh: false, highToLow: true };

        case "CHESS_PIECES":
            return { ...state, chessPieces: chessPieces };

        case "CHESS_BOARD":
            return { ...state, chessBoard: chessBoard };

        case "CHESS_CLOCK":
            return { ...state, chessClock: chessClock };

        case "CHESS_BOOKS":
            return { ...state, chessBooks: chessBooks };

        case "RANGE_FILTER":
            return { ...state, rangeValue: rangeValue };

        case "RATING":
            return { ...state, ratingValue: ratingValue };

        case "IN_STOCK":
            return { ...state, inStock: inStock };

        case "RESET":
            return {
                lowToHigh: false,
                highToLow: false,
                chessPieces: false,
                chessBooks: false,
                chessBoard: false,
                chessClock: false,
                ratingValue: "",
                inStock: false,
                rangeValue: 10000
            };

        default:
            return { ...state };
    }
};

export { filterReducer };
