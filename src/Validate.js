
const Validate = (formData) => {
    let error = {}
    let errorMsg = 'Please complete this required field.';

    if(formData.fName === ''){
        error.fName = errorMsg
    }
    if(formData.lName === ''){
        error.lName = errorMsg
    } 
    if(formData.businessEmail === ''){
        error.businessEmail = errorMsg
    }
    if(formData.company === ''){
        error.company = errorMsg
    }
    if(formData.phone === ''){
        error.phone = errorMsg
    }
    if(formData.msg === ''){
        error.msg =  errorMsg
    }
    if(formData.msg === ''){
        error.msg =  errorMsg
    }
    if(formData.state === ''){
        error.state =  errorMsg
    }
    

  return error;
}

export default Validate