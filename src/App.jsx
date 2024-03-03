// import { useState } from 'react'

import { BrowserRouter as Router} from 'react-router-dom';
import { Article } from './Components/Article.jsx';
import './index.css'
import { Navbar } from './Components/Navbar.jsx';
import { Footer } from './Components/Footer.jsx';






function App() {

  return (
    <Router>
      <div className='pagge mainPage'>
        <Navbar />
        <Article />
        <Footer/>
      </div>
    </Router>
  )
}

export default App
