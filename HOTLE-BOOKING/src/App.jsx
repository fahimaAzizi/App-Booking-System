import React from 'react'
import { useLocation } from 'react-router-dom'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes()
  return (
    <div> 
      <Navbar/>
    </div>
  )
}

export default App