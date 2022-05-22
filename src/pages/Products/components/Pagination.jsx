import { useEffect, useState } from "react";

const Pagination = ({ products, productsPerPage, currentPage, setCurrentPage, currentProducts }) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    const paginationTabs = () => {
        setPageNumbers([]);
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            setPageNumbers(prev => [...prev, i]);
        }
    }

    useEffect(() => paginationTabs(), [products]);

    useEffect(() => {
        if (currentProducts.length < 1) {
            setCurrentPage(1);
        }
    }, [products])

    return (
        <div className="paginated-btns-container">
            {pageNumbers.length > 1 ?
                <>
                    {currentPage !== 1 ?
                        <button className="paginate-btn paginate-direction" onClick={() => setCurrentPage(prev => prev - 1)}>
                            <i className="fas fa-angle-left"></i>
                        </button>
                        : null}
                    {pageNumbers.map(page => (
                        <button
                            key={page}
                            className={`btn btn-outline-primary paginate-btn ${currentPage === page ? "paginate-btn-active" : ""}`}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    ))}
                    {currentPage !== Math.ceil(products.length / productsPerPage) ?
                        <button className="paginate-btn paginate-direction" onClick={() => setCurrentPage(prev => prev + 1)}>
                            <i className="fas fa-angle-right"></i>
                        </button>
                        : null}
                </>
                : null}
        </div>
    )
}

export { Pagination };
