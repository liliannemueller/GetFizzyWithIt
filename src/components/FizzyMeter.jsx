import React, { useState } from 'react';

import '../styles/Meter.scss'


export default function FizzyMeter({ value, onChange }){
    
    return(
        <div className='range-container'>
        <div className ='meter-label'>
            <label htmlFor="fizzyMeter" className="form-label">How fizzy is it?</label>
        </div>
        <div className= "meter-container">
            <h4>flat</h4>
            <input type="range" className="form-range" min="0" max="4" step="1" id="fizzyMeter" value={value} onChange={onChange}/> 
            <h4>fizzy</h4>
        </div>
        
        </div>
    )
}