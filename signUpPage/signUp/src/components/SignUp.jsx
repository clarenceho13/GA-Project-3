import React, { useState } from 'react'


const SignUp=()=> {
 const [checked, setChecked]= useState(false);
 const handleChange = () => {
    setChecked(!checked);
  };
const handleSubmit =()=>{
//if handleChange is true, go to bookings page
//else return, "please agree to the T&C"
};
  return (
    <div>
      <h1>Confirmation and Conditions</h1>
      <ol>
      <li>Rule 1</li>
      <li>Rule 2</li>
      <li>Rule 3</li>
      <li>Rule 4</li>
      </ol>

      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        I agree to the Terms and Conditions
      </label>
      <div>
      <button onClick={handleSubmit}>Ok/Submit</button>
      </div>
     

    </div>
  )
}

export default SignUp;
