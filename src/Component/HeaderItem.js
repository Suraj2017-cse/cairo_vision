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

const HeaderItem = () => {
  const display = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className='header'>
        <nav className='position-fixed w-100 z-index'>
          <div className='container-fluid d-flex justify-content-between'>
            <a className='navbar-brand d-flex align-items-center' href='/'>
              <img src='./linkedin.png' alt='header logo' className='width' />
            </a>
            <div className='d-flex position-relative'>
              <ul className='menu-items list-unstyled d-lg-flex d-none flex-lg-row align-items-center justify-content-center bg-white rounded-5 px-4 py-0 fw-bolder'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Health Plans
                  </a>
                </li>
                <li className='nav-item ms-4'>
                  <a className='nav-link' href='/'>
                    Employers
                  </a>
                </li>
                <li className='nav-item ms-4'>
                  <a className='nav-link' href='/'>
                    Be a Papa Pal
                  </a>
                </li>
                <li className='nav-item ms-4'>
                  <a className='nav-link' href='/'>
                    Resources
                  </a>
                </li>
              </ul>
              <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                <li className='nav-item contact-papa rounded-5 px-4 py-3 fw-bolder ms-3'>
                  <a href='/' className='nav-link text-uppercase'>
                    Contact Papa
                  </a>
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
            <li className='fs-3 fw-bold'>Health Plans</li>
            <li className='fs-3 fw-bold'>Employers</li>
            <li className='fs-3 fw-bold'>Be a Papa Pal</li>
            <li className='fs-3 fw-bold'>Resources</li>
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
              <BsFacebook />{" "}
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

        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
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
              <select className='form-select mb-4 rounded-5 px-3 py-3 mt-4 fw-bolder fs-3'>
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
              </select>
            </div>

            <div className='col-md-6'>
              <img
                src='./FPO_Home-Hero_683x1096.webp'
                alt='Hero-Papa'
                className='w-100'
              />
            </div>
          </div>
        </div>

        <div className='human-icon'>
          <IoIosMan className='man-icon' />
        </div>
      </header>
    </>
  );
};

export default HeaderItem;
