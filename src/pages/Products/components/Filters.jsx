const Filters = () => {
    return (
      <div>
        <div class="filter-clear-heading">
          <h2 class="filter-heading">Filters</h2>
          <button class="text-underline clear-filters-btn btn btn-text-primary gray-text">
            Clear
          </button>
        </div>
  
        {/* Range Slider Filter */}
        <div class="filter-type">
          <h3 class="filter-type-heading">Price</h3>
          <div class="filter-type-container">
            <label for="slider">₹0 - ₹13000</label>
            <input type="range" min="0" max="10000" value="5000" class="slider" />
          </div>
        </div>
  
        {/* Sort By Prices Filter */}
        <div class="filter-type">
          <h3 class="filter-type-heading">Sort by</h3>
          <div class="filter-type-container">
            <input type="radio" id="low-high" name="radio-sort" />
            <label for="low-high">Price - Low to High</label>
          </div>
          <div class="filter-type-container">
            <input type="radio" id="high-low" name="radio-sort" />
            <label for="high-low">Price - High to Low</label>
          </div>
        </div>
  
        {/* Category Filter */}
        <div class="filter-type">
          <h3 class="filter-type-heading">Category</h3>
          <div class="filter-type-container">
            <input type="checkbox" id="chess-pieces" />
            <label for="chess-pieces">Chess Pieces</label>
          </div>
          <div class="filter-type-container">
            <input type="checkbox" id="chess-books" />
            <label for="chess-books">Chess Books</label>
          </div>
          <div class="filter-type-container">
            <input type="checkbox" id="chess-board" />
            <label for="chess-board">Chess Board</label>
          </div>
          <div class="filter-type-container">
            <input type="checkbox" id="chess-clock" />
            <label for="chess-clock">Chess Clock</label>
          </div>
        </div>
  
        {/* Rating Filter */}
        <div class="filter-type">
          <h3 class="filter-type-heading">Rating</h3>
          <div class="filter-type-container">
            <input type="radio" id="four-star" name="radio-rating" />
            <label for="four-star">4 stars & above</label>
          </div>
          <div class="filter-type-container">
            <input type="radio" id="three-star" name="radio-rating" />
            <label for="three-star">3 stars & above</label>
          </div>
          <div class="filter-type-container">
            <input type="radio" id="two-star" name="radio-rating" />
            <label for="two-star">2 stars & above</label>
          </div>
          <div class="filter-type-container">
            <input type="radio" id="one-star" name="radio-rating" />
            <label for="one-star">1 stars & above</label>
          </div>
        </div>
      </div>
    );
  };
  
  export { Filters };
  