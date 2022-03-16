import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, {
        lowToHigh: false,
        highToLow: false,
        chessPieces: false,
        chessBooks: false,
        chessBoard: false,
        chessClock: false,
        ratingValue: "",
        inStock: false,
        rangeValue: 10000
    });

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };