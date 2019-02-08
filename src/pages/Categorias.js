import React from 'react';
import { Link } from 'react-router-dom'

function Categorias () {
  return (
    <div>
      <h1>Categorias</h1>
      <Link to="/pesquisa/teste">pesquisa</Link>
      <Link to="/clinicas">clinicas</Link>
    </div>
  )
}

export default Categorias;
