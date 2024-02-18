import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

const TURNS = {
  x: 'X',
  o: 'O'
}

const WINNING_COMBINATIONS = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6]
]


const checkWinner = (board) => {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    } else if (board.every(Boolean)) {
      return false
    }
  }
  return null
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {

    if (board[index] || winner) return
  
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
      
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }else if(newWinner === false){
      setWinner(false)
    }

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((_, index)=>{
            return (
              <Square 
               key={index} 
               index={index} 
               updateBoard={updateBoard}
               >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
        
      <section className='turn'>
      <Square isSelected = {turn === TURNS.x}>
         {TURNS.x}
        </Square>
        <Square isSelected = {turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
        <WinnerModal winner={winner} resetGame={resetGame} />
     </main> 
  )
   
  
}

export default App
