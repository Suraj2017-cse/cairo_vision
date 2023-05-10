import React, { useState } from "react";
import "./Member.css";
import Validate from "./Validate";

const Member = () => {

  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    businessEmail: "",
    company: "",
    state: "",
    phone: "",
    msg: "",
  });
//   console.log(formData);
  const handleChange = (event) => {
    const newObj = {...formData, [event.target.name]: event.target.value};
    setFormData(newObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // form Validate 
   setError(Validate(formData));

  }

  return (
    <section className='bg-white'>
      <div className='container px-md-5 padding'>
        <div className='text-md-center w-50 m-auto pt-5'>
          <h2 className='fontSize fw-bold'>
            Interested in Papa for your members?
          </h2>
          <p className='para1'>
            Want to learn more about how Papa can benefit your health plan
            members? Let’s chat!
          </p>
          <p>
            Are you a care provider, social worker, or health plan
            representative interested in connecting an individual with Papa’s
            services? Start by confirming their Papa benefit with their health
            plan, then contact 1-800-348-7951 for help with enrollment.
          </p>
          <p>*Papa currently does not offer services directly to consumers.</p>
        </div>
        <form className='d-flex flex-column gap-4' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <input
                onChange={handleChange}
                type='text'
                value={formData.fName}
                name="fName"
                className='form-control p-3 fw-bold rounded-5'
                placeholder='First Name*'
              />
              {error.fName && <p className="text-danger fw-bolder">{error.fName}</p>}
            </div>
            <div className='col-md-6'>
              <input
                onChange={handleChange}
                type='text'
                value={formData.lName}
                name="lName"
                className='form-control p-3 fw-bold rounded-5'
                placeholder='Last Name*'
              />
              {error.lName && <p className="text-danger fw-bolder">{error.lName}</p>}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <input
                onChange={handleChange}
                type='text'
                value={formData.businessEmail}
                name="businessEmail"
                className='form-control p-3 fw-bold rounded-5'
                placeholder='Business Email*'
              />
              {error.businessEmail && <p className="text-danger fw-bolder">{error.businessEmail}</p>}
            </div>
            <div className='col-md-6'>
              <input
                onChange={handleChange}
                type='text'
                value={formData.company}
                name="company"
                className='form-control p-3 fw-bold rounded-5'
                placeholder='Company Name*'
              />
              {error.company && <p className="text-danger fw-bolder">{error.company}</p>}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <select className='form-select rounded-5 fw-bold p-3' onChange={handleChange} name="state">
                <option value='' selected disabled>HQ Location*</option>
                <option value='ap'>ap</option>
                <option value='br'>Br</option>
                <option value='ch'>Ch</option>
              </select>
              {error.state && <p className="text-danger fw-bolder">{error.state}</p>}
            </div>
            <div className='col-md-6'>
              <input
                onChange={handleChange}
                type='number'
                value={formData.phone}
                name="phone"
                className='form-control p-3 fw-bold rounded-5'
                placeholder='Phone Number*'
              />
              {error.phone && <p className="text-danger fw-bolder">{error.phone}</p>}
            </div>
          </div>
          <div className='row member-span'>
            <div className='col-md-6'>
              <label>I'm interested in Papa for (check all that apply):</label>
              <div className='d-flex gap-1'>
                <input type='checkbox' className='form-check' id='' />
                <span>Medicare Advantage</span>
              </div>
              <div className='d-flex gap-1'>
                <input type='checkbox' className='form-check' id='' />
                <span>Medicaid</span>
              </div>
              <div className='d-flex gap-1'>
                <input type='checkbox' className='form-check' id='' />
                <span>Commercial Health Plans</span>
              </div>
            </div>
            <div className='col-md-6'></div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <textarea
                name='msg'
                value={formData.msg}
                cols='10'
                rows='2'
                onChange={handleChange}
                className='form-control rounded-5'
                placeholder='How can we Help?*'></textarea>
              {error.msg && <p className="text-danger fw-bolder">{error.msg}</p>}
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='d-flex gap-1 align-items-start member-span'>
                <input type='checkbox' className='form-check' />
                <span>
                  By completing this form, you consent to receiving ongoing
                  email communications from Papa, including promotional
                  materials, regarding its services*
                </span>
                {error.check && <p className="text-danger fw-bolder">{error.check}</p>}
              </div>
            </div>
          </div>
          <div className='memberBtn text-center'>
            <button className='text-uppercase'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Member;
