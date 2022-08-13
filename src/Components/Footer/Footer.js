import React from 'react'
import './footer.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'


const Footer = (props) => {
    const navigate = useNavigate();
  return (
    <div>
<footer className='project-footer'>
    <div>
    <button className='go-back-button' onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faArrowLeft} /> Retour</button>
    
        </div>
  {props.path &&  <Link to={props.path}>
        Prochain Artiste <FontAwesomeIcon icon={faArrowRight} />
    </Link>}
    </footer>
    </div>
  )
}

export default Footer
