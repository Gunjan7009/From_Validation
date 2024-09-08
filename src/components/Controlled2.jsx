import React, { useState } from 'react';

const Controlled2 = () => {

    // Initialize state with an object to store form data
    const [formData, setFormData] = useState({
        fname: '',
        lname: ''
    });

    // Generic handler for input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value // Dynamically update the corresponding field
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted successfully');
        console.log(`First Name: ${formData.fname}, Last Name: ${formData.lname}`);
    };
  return (
    <div>
      <h1>Controlled Component[with single useState]</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            value={formData.fname}
            onChange={handleInputChange}
            name="fname" // name should match the key in formData
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type='text'
            value={formData.lname}
            onChange={handleInputChange}
            name="lname"
            placeholder="Enter Last Name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Controlled2
