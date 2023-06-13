import React, { useState } from 'react'
import classes from './Forms.module.css'

const Forms = () => {

  const [firstName, setFirstName] = useState();
  const [fname, setfname] = useState();

  const [lastName, setLastName] = useState();
  const [lname, setlname] = useState();

  const [Email, setEmail] = useState();
  const [email, setemail] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    setfname(firstName)
    setlname(lastName)
    setemail(Email)
  }


  return (

    <div className={`d-flex ${classes.main_div}`}>
      <div className={`mt-5 ${classes.div1}`}>
        <form className={`mt-2 text-center ${classes.form}`} onSubmit={handleForm}>
          <legend className={`mt-3 h4  ${classes.heading}`}>Create Account</legend><br/> <br/>

            <label className={`${classes.heading2}`}>Enter First Name :</label>
            <input type='text' onChange={(e) => setFirstName(e.target.value)} className={`ms-4 ${classes.inpt}`} /><br /><br />

            <label className={`${classes.heading2}`}>Enter Last Name :</label>
            <input type='text' onChange={(e) => setLastName(e.target.value)} className={`ms-4 ${classes.inpt}`}/><br /><br />

            <label className={`${classes.heading2}`}>Enter User Email :</label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} className={`ms-4 ${classes.inpt}`}/><br /><br />

            <button type='submit' className={`m-3 ${classes.button}`}>Submit</button> <br/>
        </form>
      </div>

      <div className={`d-flex ${classes.div2}`}>
        <legend className={`${classes.heading3}`}> Check Account 
          <h3 className={`${classes.head1}`}>{fname}</h3>
          <h3>{lname}</h3>
          <h3>{email}</h3>
        </legend>
      </div>

    </div>

  );
}

export default Forms