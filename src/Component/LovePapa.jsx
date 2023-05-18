import React from 'react'
import { LovePapaData } from '../Data'
import { Link } from 'react-router-dom'

const LovePapa = () => {
    const container = {
        maxWidth: "800px",
        margin: '0 auto'
    }
    const style = {
        background : '#1140C0',
        color : '#69F1FF'
    }
  return (

   <> 
   
   <div className='bg-color'>
  <div className='py-5' style={container}>
     <h2 className='display-1 fw-bolder text-center'>You'll love being a Papa Pal</h2>

    <div className='d-flex flex-column gap-5'>
    {
         LovePapaData.map((items) => {
             const {id,title,para,img} = items;
           return(
             <div className='d-md-flex  gap-5 align-items-center lovePapa' key={id}>
             <div className={`display-1 w-50 text-center order-0 ${(id%2===0) ? 'order-md-3' : 'order-md-0'}`}>
                 <img src={img} alt={title} />
                 </div>
             <div className={`w-50 text-center order-1 ${(id/2===0) ? 'order-md-0' : 'order-md-2'}`}>
                 <h3 className='fs-1 fw-bolder'>{title}</h3>
                 <p>{para}</p>
             </div>
         </div>
           )
         })
     }
    <form className='d-flex flex-column align-items-center gap-3'>
     <label>Enter your phone number to start your application.</label>
     <input type="tel" placeholder='Mobile number' className='form-control rounded-5 text-center p-3 w-50' />
    <div className='d-flex align-items-center justify-content-center text-center'>
    <input type="checkbox" className='form-check-inline' />
<p>I have read and agree to the terms of Papa’s <Link >EULA</Link> and <Link>Privacy Policy</Link>.</p>
    </div>
<button className='btn px-3 py-2 fw-bolder rounded-5 text-uppercase' style={style}>apply now</button>
    </form>
    </div>
  </div>   
 <svg
     aria-hidden="true"
     viewBox="0 0 1440 64"
     className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible"
     preserveAspectRatio="none"
   >
     <path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#FFDFE9"></path>
   </svg>
 </div>
   </>
  )
}

export default LovePapa