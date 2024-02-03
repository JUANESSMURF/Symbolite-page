// import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Article } from './Components/Article.jsx';
import './index.css'




function App() {

  return (
    <Router>
      <div className='mainPage'>       
        <Article />
      </div>
    </Router>
  )
}

export default App
