import React from "react";
import "./Customers.css";
import { PremiumData } from "../Data";

const Customers = () => {
  return (
    <section className='container-fluid row m-auto mt-5'>
      {PremiumData.map((premium) => (
        <div key={premium.id} className="row mt-5">
          <div className={`health-plans col-md-6 order-${premium.order1}`}>
            <h2>{premium.title}</h2>
            <p>{premium.desc}</p>
            <button className='border-0 rounded-5 fw-bold fs-5 py-2 px-4'>
              {premium.button}
            </button>
          </div>

          <div className={`position-relative img-Item col-md-6 order-${premium.order2}`}>
            <img
              src={premium.img1}
              alt={premium.alt}
              className={`health-plan-pic-1 rounded-4  ${(premium.order1 === 1) ? "left": 'right'}`}
            />
            <img
              src={premium.img2}
              alt={premium.alt}
              className={`health-plan-pic-2 rounded-4  ${(premium.order1 === 1) ? "left": 'right'}`}
            />
            <img
              src={premium.img3}
              alt={premium.alt}
              className={`health-plan-pic-3 rounded-4  ${(premium.order1 === 1) ? "left": 'right'}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Customers;
