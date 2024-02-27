// import { useState } from 'react'

import { BrowserRouter as Router} from 'react-router-dom';
import { Article } from './Components/Article.jsx';
import './index.css'
import { Navbar } from './Components/Navbar.jsx';
import { Footer } from './Components/Footer.jsx';
import { Terms } from './Components/Terms.jsx';





function App() {

  return (
    <Router>
      <div className='pagge mainPage'>
        <Navbar />
        <Article />
        <Terms/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
