import React from "react";
import "./Companion.css";
import {CompanionCare} from '../Data'

const Companion = () => {
  return (
    <section className="hero-content">
      <div className='container-fluid'>
        <div className='content row'>
          <div className='col-md-6'>
            <h2 className="mb-4">Companion care</h2>
            <span className="fs-5">
              Papa Pals provide vital social support and care to strengthen
              families, help older adults remain connected, and support diverse
              communities—providing win-win benefits for all.
            </span>
          </div>

          <div className='col-md-6'>
           <div className="row">
            {
                CompanionCare.map((item) => {
                    const {id, title, desc, icon} = item;
                    return(
                        <div className='col-md-6' key={id}>
                        <div className="android-icon">{icon}</div>
                        <h4 className="fs-4">{title}</h4>
                        <p>{desc}</p>
                      </div>
                    )
                    
                })
            }          
           </div>
          </div>
        </div>

       <div className="row sign-me-up mt-5 mb-5 container m-auto rounded-5 p-2">
       <div className='col-md-8'>
          <p className="fs-5 fw-bold text-white">Introducing our new quarterly magazine, Rx: Human</p>
          <h3 className="fs-3">
            Subscribe for the latest on topics like health equity, social
           drivers of health, and closing care gaps.
          </h3>
          <button className="fw-bolder fs-5 rounded-5 border-0 px-4 py-2">SIGN ME UP</button>
        </div>

        <div className='rx-human position-relative col-md-4'>
          <img
            src='./pexels-joão-rabelo-10291366.jpg'
            alt='Mother daughter duo'
            className='mother-daughter'
          />
          <img src='./pepsi.jpeg' alt='Pepsi Coke' className='pepsi-coke' />
          <img src='./rx-human.jpg' alt='Old Aunty' className='old-aunty' />
        </div>
       </div>

      </div>
      <a href="/" className='meet-papa position-relative'>
        <img src='./Website-Brand-Video-1536x689.webp' alt='Meet papa' />
          <i class='fa-solid fa-play p-4 rounded-pill position-absolute top-50'></i>
      </a>
    </section>
  );
};

export default Companion;
