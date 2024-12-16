import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    const handleClearSearch = () => {
        setSearchTerm(''); // Clear the search input
    };

    return (
        <div className="search-bar-container">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <span
                        className="input-group-text clear-btn"
                        onClick={handleClearSearch}
                    >
                        &times;
                    </span>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
