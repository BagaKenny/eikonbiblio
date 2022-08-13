import React from 'react'
import './selection.css'
import Spinning from '../../img/logo.svg'


const Selection = () => {
  return (
    <div className='selection-container'>
      <p className='selection-title'>Notre Selection</p>
      <div className='date'> 2021 <br/>2022</div>
      <div> <p>eikonWork</p> </div>
      <div className='icon-spinning'> <img src={Spinning} alt=''/> </div>
    </div>
  )
}

export default Selection
