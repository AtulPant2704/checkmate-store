const CategoryFilter = ({ chessPieces, chessBoard, chessBooks, chessClock, filterDispatch }) => {
    return (
        <div className="filter-type">
            <h3 className="filter-type-heading">Category</h3>

            {/* Chess Pieces Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-pieces" checked={chessPieces}
                    onChange={(event) =>
                        event.target.checked
                            ? filterDispatch({
                                type: "CHESS_PIECES",
                                payload: { chessPieces: true }
                            })
                            : filterDispatch({
                                type: "CHESS_PIECES",
                                payload: { chessPieces: false }
                            })
                    } />
                <label htmlFor="chess-pieces">Chess Pieces</label>
            </div>

            {/* Chess Books Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-books" checked={chessBooks}
                    onChange={(event) =>
                        event.target.checked
                            ? filterDispatch({
                                type: "CHESS_BOOKS",
                                payload: { chessBooks: true }
                            })
                            : filterDispatch({
                                type: "CHESS_BOOKS",
                                payload: { chessBooks: false }
                            })
                    } />
                <label htmlFor="chess-books">Chess Books</label>
            </div>

            {/* Chess Board Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-board" checked={chessBoard}
                    onChange={(event) =>
                        event.target.checked
                            ? filterDispatch({
                                type: "CHESS_BOARD",
                                payload: { chessBoard: true }
                            })
                            : filterDispatch({
                                type: "CHESS_BOARD",
                                payload: { chessBoard: false }
                            })
                    } />
                <label htmlFor="chess-board">Chess Board</label>
            </div>

            {/* Chess Clock Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-clock" checked={chessClock}
                    onChange={(event) =>
                        event.target.checked
                            ? filterDispatch({
                                type: "CHESS_CLOCK",
                                payload: { chessClock: true }
                            })
                            : filterDispatch({
                                type: "CHESS_CLOCK",
                                payload: { chessClock: false }
                            })
                    } />
                <label htmlFor="chess-clock">Chess Clock</label>
            </div>
        </div>
    )
}

export { CategoryFilter };
