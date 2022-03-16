const InStockFilter = ({ inStock, dispatch }) => {
    return (
        <div className="filter-type">
            <h3 className="filter-type-heading">Others</h3>
            <div className="filter-type-container">
                <input type="checkbox" id="in-stock" checked={inStock}
                    onChange={(event) =>
                        event.target.checked
                            ? dispatch({
                                type: "IN_STOCK",
                                payload: { inStock: true }
                            })
                            : dispatch({
                                type: "IN_STOCK",
                                payload: { inStock: false }
                            })
                    } />
                <label htmlFor="in-stock">In Stock</label>
            </div>
        </div>
    )
}

export { InStockFilter };