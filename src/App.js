import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './Components/AnimatedRoutes'
import Header from './Components/Nav/Header'



// Component
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import './styles/styles.css'


const App = () => {
  return (
    <div>
    <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <ScrollToTop />
      <AnimatedRoutes />
    </Router>
    </div>
  )
}

export default App
