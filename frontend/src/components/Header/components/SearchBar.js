import React, { useState } from 'react'

import './SearchBar.css'

function SearchBar() {
    const [searchedProduct, setSearchedProduct] = useState("");
  
    return(
      <input
        className="search-bar"
        type="text"
        placeholder="Cauta produs..."
        onChange={(event) => {setSearchedProduct(event.target.value)}}
        value={searchedProduct}
      />
    )
}

export default SearchBar;