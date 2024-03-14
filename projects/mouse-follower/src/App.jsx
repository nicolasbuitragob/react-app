import './App.css'
 import { useEffect, useState } from 'react'

 const FollowMouse = () => {
  const [position,setPosition] = useState({x:0,y:0});
  const [enabled,setEnabled] = useState(false);

  useEffect(() => {

    const handleMove = (event) => {
      const {clientX,clientY} = event
      setPosition({x:clientX,y:clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove',handleMove)
    }

    return () => {
      window.removeEventListener('pointermove',handleMove)
    }
    
  },[enabled])

  return <main>
    <div style={
      {
        position: 'absolute',
        backgroundColor: '#09F',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }
    }>

    </div>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Enabled' : 'Disabled'}
    </button>
  </main>
 }

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <FollowMouse />
      </header>
    </div> 
  )
}

export default App
