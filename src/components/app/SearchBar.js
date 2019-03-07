import React from 'react';
import { withRouter } from 'react-router-dom';

function SearchBar({ history }) {
  const [query, setQuery] = React.useState();

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/pesquisa/${query}`);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={event => setQuery(event.target.value)}
        type="text"
        className={`input ${query ? 'active' : ''}`}
        placeholder="Busca"
      />
      <button className="submit">
        <i className="icon-search" />
      </button>
    </form>
  );
}

export default withRouter(SearchBar);
