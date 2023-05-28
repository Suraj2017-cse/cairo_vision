import React, { useRef, useState } from "react";
import "./HeaderItem.css";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoIosMan } from "react-icons/io";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const HeaderItem = ({home}) => {
  const display = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };


 const navigate = useNavigate()

 const handleHome = () => {
  navigate('/')
}

const handlePlans = () => {
  navigate("/health-plans")
}

const handleEmployers = () => {
  navigate('/employers')
}

const handleBePapa = () => {
  navigate('/be-papa-pal')
}

const handleResources = () => {
  navigate('/resources')
}
const handleContact = () => {
  navigate('/contactpapa')
}

  
  return (
    <>
      <header className={`header ${home[0].alt === 'Hero-Papa' ? 'h': 'hero-mummy-bgColor text-white'}`}>
        <nav className='position-fixed w-100 z-index'>
          <div className='container-fluid d-flex justify-content-between'>
            <Link className='navbar-brand d-flex align-items-center' onClick={handleHome}>
              <img src='./linkedin.png' alt='header logo' className='width' />
            </Link>
            <div className='d-flex position-relative'>
              <ul className='menu-items list-unstyled d-lg-flex d-none flex-lg-row align-items-center justify-content-center bg-white rounded-5 px-4 py-0 fw-bolder'>
                <li className='nav-item' onClick={handlePlans}>
                  <Link className='nav-link'>
                    Health Plans
                  </Link>
                </li>
                <li className='nav-item ms-4' onClick={handleEmployers}>
                  <Link className='nav-link'>
                    Employers
                  </Link>
                </li>
                <li className='nav-item ms-4' onClick={handleBePapa}>
                  <Link className='nav-link'>
                    Be a Papa Pal
                  </Link>
                </li>
                <li className='nav-item ms-4' onClick={handleResources}>
                  <Link className='nav-link'>
                    Resources
                  </Link>
                </li>
              </ul>
              <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                <li className='nav-item contact-papa rounded-5 px-4 py-3 fw-bolder ms-3' onClick={handleContact}>
                  <Link className='nav-link text-uppercase'>
                    Contact Papa
                  </Link>
                </li>
                <li
                  className='nav-item contact-papa rounded-5 px-2 py-1 fw-bolder ms-3'
                  onClick={handleClick}>
                  <button className='btn contact-papa'>
                    {isActive ? (
                      <CgClose className='fw-bolder fs-2' />
                    ) : (
                      <CgMenuRight className='fw-bolder fs-2' />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={`position-fixed top bg-primary side-navbar p-4 pt-5 ${
            isActive ? "d-block" : "d-none"
          }`}
          ref={display}>
          <ul className='list-unstyled side-navbarItem d-lg-none d-flex align-items-end flex-column gap-2 mt-5 pt-5'>
            <li className='fs-3 fw-bold' onClick={handlePlans}>Health Plans</li>
            <li className='fs-3 fw-bold' onClick={handleEmployers}>Employers</li>
            <li className='fs-3 fw-bold' onClick={handleBePapa}>Be a Papa Pal</li>
            <li className='fs-3 fw-bold' onClick={handleResources}>Resources</li>
          </ul>
          <ul className='list-unstyled side-navbarItem d-flex align-items-end flex-column gap-2 mt-lg-5 pt-lg-5'>
            <li className='fs-3 fw-bold'>Life as a Papa Pal</li>
            <li className='fs-3 fw-bold'>Members</li>
            <li className='fs-3 fw-bold'>About Us</li>
            <li className='fs-3 fw-bold'>Careers</li>
            <li className='fs-3 fw-bold'>Support</li>
          </ul>

          <ul className='list-unstyled d-flex justify-content-end gap-4 side-navbarItem-2'>
            <li className='p-2'>
              <BsTwitter />
            </li>
            <li className='p-2'>
              <BsFacebook />
            </li>
            <li className='p-2'>
              <BsYoutube />
            </li>
            <li className='p-2'>
              <BsLinkedin />
            </li>
            <li className='p-2'>
              <BsInstagram />
            </li>
          </ul>
        </div>

       {
        home.map((element) => (
          <div className='container' key={element.id}>
          <div className={`${(element.title === 'Get in touch') ? 'd-flex flex-column text-center w-50 m-auto': 'row'} mt-5`}>
            <div className={`${(element.title === 'Get in touch')? '': 'col-md-6'} mt-5`}>
              <h2 className={`${(element.title === 'Get in touch')? 'font': ''}`}> {element.title}<br />{element.title2}</h2>
              <p>{element.para}</p>
              <p>{element.para2}</p>
              {element.alt === 'Hero-Papa' ? <select className='form-select mb-4 rounded-5 px-3 py-3 mt-4 fw-bolder fs-3'>
                <option className='fw-bold' disabled selected>
                  I'd like to learn...
                </option>
                <option className='fw-bold'>
                  how Papa works with health plans
                </option>
                <option className='fw-bold'>
                  where I can sign up to be a Papa Pal.
                </option>
                <option className='fw-bold'>
                  how to get started as a member
                </option>
                <option className='fw-bold'>
                  about career opportunities at Papa
                </option>
              </select> : <button className={(home[0].title === 'Get in touch') ? 'd-none' : "px-3 py-2 border-0 rounded-5 fw-bolder text-uppercase  contact-papa"}>get started</button>}
            </div>

            <div className={`${(element.title === 'Get in touch')? '': 'col-md-6'} mt-5`}>
              {
                element.title === 'Get in touch' ?(<><p>{element.para_2}</p> <p>{element.para3}</p></> ) : (<img
                src={element.img}
                alt={element.alt}
                className='w-100 rounded-5 hero-mummy'
              />)
              }
            </div>
          </div>
        </div>
        ))
       }
        
        <div className='position-fixed human-icon'>
         <IoIosMan className='position-absolute fs-1' />
        </div>
        <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill={`${(home[0].alt === 'BePapaPal') ? '#1140C0' : '#FFEDCC'}`}></path></svg>
      </header>
    </>
  );
};

export default HeaderItem;
