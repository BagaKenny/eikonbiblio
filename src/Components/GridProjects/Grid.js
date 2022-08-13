import React from 'react'
import './grid.css';
import { Link } from 'react-router-dom';

import Marvel from '../../img/marvel.webp'
import Limbo from '../../img/Limbo2.webp'
import Arn from '../../img/arn.webp'
import Apocalype from '../../img/apocalypse4.webp'
import HTLNIP from '../../img/htlnip.webp'
import Reaching from '../../img/reachingfordawn.webp'
import Nsene from '../../img/nsenene5.webp'
import Indigne from '../../img/indignetoit.jpeg'
import Time from '../../img/voyagtemps.webp'
import Citizens from '../../img/citizenscl2.webp'
import Apiary from '../../img/apiary2.jpeg'
import BordsReels from '../../img/bordsreels.jpeg'

const Grid = () => {
  return (
    <div  className='grid-container'>

 
      <div className='item-1 img-contain'><Link to="/FirstBook" className='overlay'> <p>Marvel</p>  <button>+</button> </Link> <img src={Marvel} alt='Marvel Harris '/> </div>
      
      <div className='item-2 img-contain'> <Link to="/SecondBook" className='overlay'> <p>Limbo</p> <button>+</button></Link>   <img src={Limbo} alt='limbo '/> </div>
      <div className='item-3 img-contain'><Link to="/ThirdBook" className='overlay'> <p>ARN</p> <button>+</button></Link>  <img src={Arn} alt='ARN '/></div>
      <div className='item-4 img-contain'><Link to="/FourthBook" className='overlay'> <p>Apocalypse</p> <button>+</button></Link>  <img src={Apocalype} alt='Apocalypse book '/> </div>
      <div className='item-5 img-contain'><Link to="/FifthBook" className='overlay'> <p>How to look natural in...</p> <button>+</button></Link>  <img src={HTLNIP} alt='how to look '/></div>
      <div className='item-6 img-contain'><Link to="/SixthBook" className='overlay'> <p>Reaching for Dawn</p> <button>+</button></Link>  <img src={Reaching} alt='Reaching for Dawn '/></div>
      <div className='item-7 img-contain'><Link to="/SeventhBook" className='overlay'> <p>Nsene</p> <button>+</button></Link>  <img src={Nsene} alt='Nsene '/></div>
      <div className='item-8 img-contain'><Link to="/EigthBook" className='overlay'> <p>Indignes-toits</p> <button>+</button></Link>  <img src={Indigne} alt='Indignes-toits '/></div>
      <div className='item-9 img-contain'><Link to="/NinethBook" className='overlay'>  <p>Les Voyageurs du...</p><button>+</button></Link>  <img src={Time} alt='Voyageurs du temps '/></div>
      <div className='item-10 img-contain'><Link to="/TenthBook" className='overlay'><p>Citizens.</p> <button>+</button></Link>  <img src={Citizens} alt='limbo '/></div>
      <div className='item-11 img-contain'><Link to="/EleventhBook" className='overlay'><p>Apiary.</p> <button>+</button></Link>  <img src={Apiary} alt='Apiary '/></div>
      <div className='item-12 img-contain'><Link to="/TwelveBook" className='overlay'><p>BordsReels.</p> <button>+</button></Link> <img src={BordsReels} alt='BordsReels '/></div>
    </div>
  )
}

export default Grid
