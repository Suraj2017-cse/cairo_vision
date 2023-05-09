import React from 'react'

const RxHuman = () => {
  return (
    <>
        <div className='row sign-me-up mt-5 mb-5 container m-auto rounded-5 p-2'>
          <div className='col-md-8'>
            <p className='fs-5 fw-bold text-white'>
              Introducing our new quarterly magazine, Rx: Human
            </p>
            <h3 className='fs-3'>
              Subscribe for the latest on topics like health equity, social
              drivers of health, and closing care gaps.
            </h3>
            <button className='fw-bolder fs-5 rounded-5 border-0 px-4 py-2'>
              SIGN ME UP
            </button>
          </div>

          <div className='rx-human position-relative col-md-4 d-flex justify-content-center'>
            <img
              src='./pexels-joão-rabelo-10291366.jpg'
              alt='Mother daughter duo'
              className='mother-daughter w-50 h-100 rounded-4'
            />
            <img
              src='./pepsi.jpeg'
              alt='Pepsi Coke'
              className='pepsi-coke w-50 h-100 rounded-4'
            />
            <img
              src='./rx-human.jpg'
              alt='Old Aunty'
              className='old-aunty w-50 h-100 rounded-4'
            />
          </div>
        </div>
    </>
  )
}

export default RxHuman