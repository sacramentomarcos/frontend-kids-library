import React from 'react'

import { Link } from 'react-router-dom'
import './App.css'


export default function App() {
  return (
    <div className='menu'>
      <h1>Livraria IPVSol Kids</h1>
      <h2>Menu</h2>
      <Link to='/emprestimo'>
      <button className='btn emprestimo'>Empréstimo</button>
      </Link>
      <Link to='/devolucao'>
      <button className='btn devolucao'>Devolução</button>
      </Link>
      <Link to='/registro'>
      <button className='btn registro'>Registro</button>
      </Link>
      <Link to='/renovacao'>
      <button className='btn renovacao'>Renovação</button>
      </Link>
    </div>

  )
}