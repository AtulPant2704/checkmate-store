const categoryFilter = (data, { chessPieces, chessBoard, chessClock, chessBooks }) => {
    if (!chessPieces && !chessBoard && !chessClock && !chessBooks) {
        return data;
    }

    const filteredData = [];
    if (chessPieces) {
        let newData = data.filter((item) => item.categoryName === "chess-pieces");
        filteredData.push(...newData);
    }
    if (chessBoard) {
        let newData = data.filter((item) => item.categoryName === "chess-board");
        filteredData.push(...newData);
    }
    if (chessClock) {
        let newData = data.filter((item) => item.categoryName === "chess-clock");
        filteredData.push(...newData);
    }
    if (chessBooks) {
        let newData = data.filter((item) => item.categoryName === "chess-books");
        filteredData.push(...newData);
    }

    return filteredData;
};

export { categoryFilter };