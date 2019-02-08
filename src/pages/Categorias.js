import React from 'react';
import { Link } from 'react-router-dom'

function Categorias () {
  return (
    <div>
      Categorias
      <Link to="/pesquisa/teste">pesquisa</Link>
      <Link to="/clinicas">clinicas</Link>
    </div>
  )
}

export default Categorias;
