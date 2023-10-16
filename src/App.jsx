import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'

function App() {


  return (
    <UserContextProvider>
    <h1>REACT</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
 