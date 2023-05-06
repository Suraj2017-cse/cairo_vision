import React from "react";
import './HeaderItem.css';
import { CgMenuRight } from "react-icons/cg";
import { IoIosMan } from "react-icons/io";

const HeaderItem = () => {
  return (
    <>
      <header className='header'>
        <nav class='navbar navbar-expand-lg navbar-light position-fixed w-100 z-index'>
          <div class='container-fluid'>
            <a class='navbar-brand' href='/'>
              <img src='./linkedin.png' alt='header logo' className='w-25' />
            </a>
            <div class='d-md-flex'>
              <ul class='navbar-nav d-sm-flex flex-sm-row ms-auto bg-white px-3 py-2 rounded-5 fw-bold menu-items'>
                <li class='nav-item'>
                  <a class='nav-link' href='/'>
                    Health Plans
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/'>
                    Employers
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/'>
                    Be a Papa Pal
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='/'>
                    Resources
                  </a>
                </li>
              </ul>
              <div className='d-flex align-items-center fw-bolder px-3 py-2 ms-3 rounded-5 menu-items fs-6 contact-papa'>
                <a href='/' className='nav-link'>
                  CONTACT PAPA
                </a>
              </div>
              <div className='ms-3 d-flex align-items-center px-3 py-2 rounded-5 menu-items contact-papa'>
                <CgMenuRight className='fw-bolder fs-2' />
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
        <div className='hero-section justify-content-between row'>
          <div className='hero col-md-6'>
            <h2>
              Hi! We’re <br />
              Papa.
            </h2>
            <p>We all need a pal sometimes. That’s why Papa’s here.</p>
            <span>
              Papa helps health plans and employers connect members and their
              families to real people for help with companionship, everyday
              tasks, transportation, and more. It’s vital human connection,
              right to the front door.
            </span>
            <select className="border-0 fw-bold rounded-5 fs-4 bg-white mt-2">
              <option className="fw-bold">I'd like to learn...</option>
              <option className="fw-bold">how Papa works with health plans</option>
              <option className="fw-bold">where I can sign up to be a Papa Pal.</option>
              <option className="fw-bold">how to get started as a member</option>
              <option className="fw-bold">about career opportunities at Papa</option>
            </select>
          </div>

          <div className='hero-image col-md-6 mt-md-0 mt-sm-4'>
            <img src='./FPO_Home-Hero_683x1096.webp' alt='Hero-Papa' />
          </div>
        </div>
        </div>


        <div className="human-icon">
        < IoIosMan className="man-icon"/>
     </div>

     
      </header>
    </>
  );
};

export default HeaderItem;
