import React from 'react';

function SearchBar() {
  return (
    <form className="searchForm" action="pesquisa/algumacoisa">
      <input type="text" className="input" name="query" placeholder="Busca" />
      <button className="submit">
        <i className="icon-search" />
      </button>
    </form>
  );
}

export default SearchBar;
