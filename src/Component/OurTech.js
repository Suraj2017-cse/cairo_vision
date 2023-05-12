import React from "react";
import './ourTech.css';

const OurTech = ({ ourTechItem }) => {
  const bColor = {
    backgroundColor: "#06083C",
    color: "#FFFFFF",
  };

  return (
    <section className='pt-5' style={bColor}>
      <div className='row container m-auto py-5'>
        <div className='col-md-6 order-1 order-md-0'>
          {ourTechItem.map((Items) => {
            const { id, title, para } = Items;
            return (
              <div key={id}>
                <h2 className={`${id === 1 ? "font" : 'fs-1'}`}>{title}</h2>
                <p>{para}</p>
              </div>
            );
          })}
        </div>
        <div className='col-md-6 order-0 order-md-1'>
          <div className='iPhone position-relativ'>
            <img src='./iPhone-13-shell-with-nav-1341x2048.png' alt='' className="position-relative" />
            <div 
              id='carouselExampleSlidesOnly'
              className='carousel slide position-bsolute ourTech'
              data-bs-ride='carousel' data-interval="1000">
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img src='./papa-app-screen-1-1.jpg' className='d-block w-100' alt='Carousel' />
                </div>
                <div className='carousel-item'>
                  <img src='./papa-app-screen-2.jpg' className='d-block w-100' alt='Carousel' />
                </div>
                <div className='carousel-item'>
                  <img src='./papa-app-screen-3.jpg' className='d-block w-100' alt='Carousel' />
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
     <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#FFEDCC"></path></svg>
    </section>
  );
};

export default OurTech;
