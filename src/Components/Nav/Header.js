import React, {useState }from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Header = () => {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () =>{
        setShowLinks(!showLinks)
        console.log(handleShowLinks)
      }


  return (
    <header  className={`header ${showLinks ? 'show-nav' : 'hide-nav'}`}>
    <div className='logo'> <Link to="/" >eikonBiblio</Link> </div>
    <button onClick={handleShowLinks} className="nav-bar-burger">
          <span className="burger-bar"></span>
        </button>
     <nav className={`header-nav ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <ul>
            <li >
                Contacte
            </li>
            <li>
                Notre Selection
            </li>
            <li>
            <a href='https://www.instagram.com/eikonbiblio/' rel="noreferrer"  target='_blank'>

                Instagram
            </a>
            </li>
            <li>
            <a href='https://www.youtube.com/channel/UChozqH_1YGL-rCuZiFEtaGA' rel="noreferrer"  target='_blank'>

                Youtube
            </a>
            </li>
        </ul>
     </nav>
    </header>
  )
}

export default Header
