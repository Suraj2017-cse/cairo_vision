import React from "react";
import "./Customers.css";
import { PremiumData } from "../Data";

const Customers = () => {
  return (
    <section className='p-4'>
      <div className='container users'>
        {PremiumData.map((premium) => (
          <div className='row mt-5 p-2' key={premium.id}>
            <div className={`col-lg-6 padding order-lg-${premium.order1} order-5`}>
              <h2 className='fw-bolder'>{premium.title}</h2>
              <p>{premium.desc}</p>
              <button className='py-2 px-4 border-0 rounded-5 fw-bolder'>
                {premium.button}
              </button>
            </div>
            <div
              className={`col-lg-6 position-relative d-flex justify-content-center height order-lg-${premium.order2} order-3`}>
              <img
                src={premium.img1}
                alt={premium.alt}
                className='position-absolute rounded-4 one'
              />
              <img
                src={premium.img2}
                alt={premium.alt}
                className='position-absolute rounded-4 two'
              />
              <img
                src={premium.img3}
                alt={premium.alt}
                className='position-absolute rounded-4 three'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
