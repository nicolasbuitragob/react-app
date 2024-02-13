import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const board = Array(9).fill(null);

const turns = {
  x: 'X',
  o: 'O'
}

function App() {
  
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
     </main> 
  )
   
  
}

export default App
