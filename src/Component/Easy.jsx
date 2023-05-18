import React from 'react'
import { EasyData } from '../Data'

const Easy = () => {
    const bgColor= {
        background : '#E3FF96'
    }
  return (
   <div style={bgColor}>
     <div className='container py-5'>
        <h2 className='display-2'>Getting started is easy</h2>

   <div className='d-flex gap-5'>
   {
        EasyData.map((items) => {
           return(
            <div>
                <div className="icon">{items.icon}</div>
                <h3>{items.title}</h3>
                <ul>
                    <li>{items.first}</li>
                    <li>{items.second}</li>
                </ul>
            </div>

           )
        })
    }
   </div>

<p>Our team will be available to answer any questions that may come up.</p>
        
    </div>
   </div>
  )
}

export default Easy