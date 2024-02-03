// import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Article } from './Components/Article.jsx';
import './index.css'
import { Navbar } from './Components/Navbar.jsx';
import { Logo } from "./Components/Logo"





function App() {

  return (
    <Router>
      <div className='mainPage'>
        <Navbar />     
        <Article />
      </div>
    </Router>
  )
}

export default App
