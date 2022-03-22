const CategoryFilter = ({ category, filterDispatch }) => {
    return (
        <div className="filter-type">
            <h3 className="filter-type-heading">Category</h3>

            {/* Chess Pieces Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-pieces" 
                checked={category.includes("chess-pieces")}
                onChange={(event) => filterDispatch(
                    {   type: "CATEGORY_FILTER", 
                        payload: {categoryType: "chess-pieces"}})
                    } />
                <label htmlFor="chess-pieces">Chess Pieces</label>
            </div>

            {/* Chess Books Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-books" 
                checked={category.includes("chess-books")}
                onChange={(event) => filterDispatch(
                    {   type: "CATEGORY_FILTER", 
                        payload: {categoryType: "chess-books"}})
                    }  />
                <label htmlFor="chess-books">Chess Books</label>
            </div>

            {/* Chess Board Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-board" 
                checked={category.includes("chess-board")}
                onChange={(event) => filterDispatch(
                    {   type: "CATEGORY_FILTER", 
                        payload: {categoryType: "chess-board"}})
                    }  />
                <label htmlFor="chess-board">Chess Board</label>
            </div>

            {/* Chess Clock Filter */}
            <div className="filter-type-container">
                <input type="checkbox" id="chess-clock" 
                checked={category.includes("chess-clock")}
                onChange={(event) => filterDispatch(
                    {type: "CATEGORY_FILTER", 
                    payload: {categoryType: "chess-clock"}})}
                />
                <label htmlFor="chess-clock">Chess Clock</label>
            </div>
        </div>
    )
}

export { CategoryFilter };
