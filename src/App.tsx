import React from 'react'

import { Link } from 'react-router-dom'
import './App.css'


export default function App():React.ReactElement {
  return (
    <div className='w-screen h-screen'>
    <div className='h-screen flex flex-col justify-center items-center bg-emerald-500 gap-6'>
      <h1>Livraria IPVSol Kids</h1>
      <Link to='/emprestimo'>
      <button className=''>Empréstimo</button>
      </Link>
      <Link to='/devolucao'>
      <button className=''>Devolução</button>
      </Link>
      <Link to='/registro'>
      <button className=''>Registro</button>
      </Link>
      <Link to='/renovacao'>
      <button className=''>Renovação</button>
      </Link>
    </div>
    </div>
  )
}