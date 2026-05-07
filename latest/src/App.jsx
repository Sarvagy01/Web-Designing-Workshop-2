import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Invite from './components/Invite'

function App() {


  return (
    <div className='container'>
    <h1>Student Information</h1>
    <Invite name="Sarvagy" branch={"Computer Science"} marks={85}/>
    <Invite name="Sourabh" branch={"Computer Science"} marks={75}/>
    <Invite name="Vedansh" branch={"Computer Science"} marks={95}/>
    </div>
  )
}

export default App
