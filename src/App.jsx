import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Header from './components/Header/Header'



import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'



const App = () => {
  return (
    <div className='overflow-x-hidden'>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio/>} />

      </Routes>
    </div>
  )
}

export default App