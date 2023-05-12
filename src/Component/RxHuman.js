import React from 'react'

const RxHuman = ({rxHumanData}) => {
  const {paragraph,mainPara, img1,img2,img3,btn} = rxHumanData[0];
  return (
    <>
        <div className='row sign-me-up mt-5 mb-5 container m-auto rounded-5 p-2'>
          <div className='col-md-8'>
            <p className='fs-5 fw-bold text-white'>{paragraph}</p>
            <h3 className='fs-3'>{mainPara}</h3>
            <button className='fw-bolder fs-5 rounded-5 border-0 px-4 py-2 text-uppercase'>{btn}</button>
          </div>

          <div className='rx-human position-relative col-md-4 d-flex justify-content-center'>
            <img
              src={img1}
              alt='Mother daughter duo'
              className='mother-daughter w-50 h-100 rounded-4'
            />
            <img
              src={img2}
              alt='Pepsi Coke'
              className='pepsi-coke w-50 h-100 rounded-4'
            />
            <img
              src={img3}
              alt='Old Aunty'
              className='old-aunty w-50 h-100 rounded-4'
            />
          </div>
        </div>
    </>
  )
}

export default RxHuman