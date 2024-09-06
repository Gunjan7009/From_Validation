import React, { useState } from 'react';
import './FromVal.css'

const Formval = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!firstname) {
      errors.firstname = 'First Name is required';
    }
    if (!lastname) {
      errors.lastname = 'Last Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (!confirmpassword) {
      errors.confirmpassword = 'Confirm Password is required';
    } else if (password !== confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }
    if (!contact) {
      errors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = 'Contact must be a valid 10-digit number';
    }
    if (age && (age < 18 || age > 100)) {
      errors.age = 'Age must be between 18 and 100';
    }
    if (!gender || gender === "Select Gender") {
      errors.gender = 'Gender is required';
    }
    // if (!file) {
    //   errors.file = 'Resume upload is required';
    // }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <h1>Form Validation</h1>
    <div className='main'>      
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className="left">
            <label htmlFor="firstname">First Name*:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter First Name"
            />
          </div>
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="lastname">Last Name*:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Enter Last Name"
            />
          </div>
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="email">Email*:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="password">Password*:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="confirmpassword">Confirm Password*:</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="tel">Contact*:</label>
            <input
              type="tel"
              name="contact"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter Mobile Number"
            />
          </div>
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="gender">Gender*:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <div className='container'>
          <div className="left">
            <label htmlFor="file">Upload Resume*:</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button type="submit" value="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Formval;
