import React from 'react';
import {withRouter} from 'react-router-dom'
import {useFormState} from 'react-use-form-state'

function SearchBar({history}) {
  const [formState, { text }] = useFormState()

  const handleSubmit = event => {
    event.preventDefault()
    history.push(`/pesquisa/${formState.values.query}`)
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input {...text('query')} type="text" className="input" placeholder="Busca" />
      <button className="submit">
        <i className="icon-search" />
      </button>
    </form>
  );
}

export default withRouter(SearchBar);
