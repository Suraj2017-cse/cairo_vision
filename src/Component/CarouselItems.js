import React from "react";
import "./CarouselItems.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const CarouselItems = () => {
  const bgColor = {
    backgroundColor : '#06083C',
    paddingTop : '5rem',
  }
  const Right ={
    right : '10px'
  }
  return (
    <>
    <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#06083C"></path></svg>
    <section style={bgColor}>
     <div className="container position-relative">
     <div
        id='carouselItemIndicator'
        className='carousel slide container'
        data-bs-touch='false'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselItemIndicator'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-bs-target='#carouselItemIndicator'
            data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-bs-target='#carouselItemIndicator'
            data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <figure className="d-md-flex">
              <img
                src='./Carousel_1.png'
                className='d-block w-50 rounded-5 img-transform_1'
                alt='Carousel_Items'
              />
              <img
                src='./Carousel_2.png'
                className='d-block w-50 rounded-5 img-transform_2'
                alt='Carousel_Items'
              />
            </figure>
            <div className='text-center w-50 m-auto mb-5'>
              <h2>Rafael & Connor</h2>
              <p>
              Rafael, a 79-year-old veteran who is fiercely independent, enjoys weekly conversations and companionship with his Papa <br /> Pal, Connor.
              </p>
              <button className="border-0 px-3 py-2 rounded-5 fw-bolder text-uppercase">MEET RAFAEL AND CONNOR</button>
            </div>
          </div>
          <div className='carousel-item'>
          <figure className="d-md-flex">
              <img
                src='./Carousel_3.png'
                className='d-block w-50 rounded-5 img-transform_1'
                alt='Carousel_Items'
              />
              <img
                src='./Carousel_4.webp'
                className='d-block w-50 rounded-5 img-transform_2'
                alt='Carousel_Items'
              />
            </figure>
            <div className='text-center w-50 m-auto mb-5'>
              <h2>Jessica</h2>
              <p>
              After caring for her father who had ALS, Jessica was inspired to work as a Papa Pal. Caring for others has made her feel like she has family even when she’s away from her own.
              </p>
              <button className="border-0 px-3 py-2 rounded-5 fw-bolder text-uppercase">READ JESSICA'S STORY</button>
            </div>
          </div>
          <div className='carousel-item'>
          <figure className="d-md-flex">
              <img
                src='./Carousel_5.png'
                className='d-block w-50 rounded-5 img-transform_1'
                alt='Carousel_Items'
              />
              <img
                src='./Carousel_6.png'
                className='d-block w-50 rounded-5 img-transform_2'
                alt='Carousel_Items'
              />
            </figure>
            <div className='text-center w-50 m-auto mb-5'>
              <h2>Doris & Robin</h2>
              <p>
              Robin, a retired nurse, became a Papa Pal so that she could meet new people and help them. Little did she know that one member, Doris, would quickly become one of her best friends.
              </p>
              <button className="border-0 px-3 py-2 rounded-5 fw-bolder text-uppercase">MEET DORIS AND ROBIN</button>
            </div>
          </div>
        </div>
      </div>
        <button
          className='carousel-control-pre position-absolute top-50 rounded-5 border-0 p-2 button'
          type='button'
          data-bs-target='#carouselItemIndicator'
          data-bs-slide='prev'>
          <AiOutlineArrowLeft className="fs-3" />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='position-absolute top-50 rounded-5 border-0 p-2 button'
          type='button'
          data-bs-target='#carouselItemIndicator'
          data-bs-slide='next' style={Right}>
          <AiOutlineArrowRight className='fs-3' />
          <span className='visually-hidden'>Next</span>
        </button>
     </div>
     <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#FFEDCC"></path></svg>
    </section>
    </>
  );
};

export default CarouselItems;
