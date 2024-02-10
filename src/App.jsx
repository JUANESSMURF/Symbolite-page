// import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Article } from './Components/Article.jsx';
import './index.css'
import { Navbar } from './Components/Navbar.jsx';
import { Modal } from "./Components/Modal"





function App() {

  return (
    <Router>
      <div className='pagge mainPage'>
        <Navbar />     
        <Article />
        <Modal />
      </div>
    </Router>
  )
}

export default App
