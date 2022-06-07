import { useState } from "react";

function SearchBox(props) {
    const [searchTerms, setSearchTerms] = useState('');

    const onChangeHandler = event => {
        setSearchTerms(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSearch(searchTerms);
    };

    return (
      <div className="searchArea">
        <div className="searchTitle">Search All Categories</div>
            <form onSubmit={handleSubmit}>
                <div className="searchBox">
                    <input 
                        className="searchInput" 
                        type="text" 
                        value={searchTerms}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="searchButton">
                    <button>Search</button>
                </div>
            </form>
      </div>
    );
}

export default SearchBox