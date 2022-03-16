const categoryFilter = (data, { chessPieces, chessBoard, chessClock, chessBooks }) => {
    if (!chessPieces && !chessBoard && !chessClock && !chessBooks) {
        return data;
    }

    const filteredData = [];
    if (chessPieces) {
        console.log("chessPieces", chessPieces);
        let newData = data.filter((item) => item.categoryName === "chess-pieces");
        filteredData.push(...newData);
    }
    if (chessBoard) {
        console.log("chessBoard", chessBoard);
        let newData = data.filter((item) => item.categoryName === "chess-board");
        filteredData.push(...newData);
    }
    if (chessClock) {
        console.log("chessClock", chessClock);
        let newData = data.filter((item) => item.categoryName === "chess-clock");
        filteredData.push(...newData);
    }
    if (chessBooks) {
        console.log("chessBooks", chessBooks);
        let newData = data.filter((item) => item.categoryName === "chess-books");
        filteredData.push(...newData);
    }

    return filteredData;
};

export { categoryFilter };