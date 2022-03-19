const RatingFilter = ({ ratingValue, filterDispatch }) => {
    return (

        <div className="filter-type">
            <h3 className="filter-type-heading">Rating</h3>

            {/* Filter Four Star Rating Products */}
            <div className="filter-type-container">
                <input type="radio" id="four-star" name="radio-rating" value="4" checked={ratingValue === "4"}
                    onChange={(event) =>
                        filterDispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <label htmlFor="four-star">4 stars & above</label>
            </div>

            {/* Filter  Three Star Rating Products */}
            <div className="filter-type-container">
                <input type="radio" id="three-star" name="radio-rating" value="3" checked={ratingValue === "3"}
                    onChange={(event) =>
                        filterDispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <label htmlFor="three-star">3 stars & above</label>
            </div>

            {/* Filter Two Star Rating Products */}
            <div className="filter-type-container">
                <input type="radio" id="two-star" name="radio-rating" value="2" checked={ratingValue === "2"}
                    onChange={(event) =>
                        filterDispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <label htmlFor="two-star">2 stars & above</label>
            </div>

            {/* Filter One Star Rating Products */}
            <div className="filter-type-container">
                <input type="radio" id="one-star" name="radio-rating" value="1" checked={ratingValue === "1"}
                    onChange={(event) =>
                        filterDispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <label htmlFor="one-star">1 stars & above</label>
            </div>
        </div>
    )
}

export { RatingFilter };
