import React, { useState } from 'react';
import './FromVal.css';

const FormVal2 = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        contact: "",
        age: "",
        gender: "",
        file: null,
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!formData.firstname) {
            errors.firstname = 'First Name is required';
        }
        if (!formData.lastname) {
            errors.lastname = 'Last Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if (!formData.confirmpassword) {
            errors.confirmpassword = 'Confirm Password is required';
        } else if (formData.password !== formData.confirmpassword) {
            errors.confirmpassword = 'Passwords do not match';
        }
        if (!formData.contact) {
            errors.contact = 'Contact number is required';
        } else if (!/^\d{10}$/.test(formData.contact)) {
            errors.contact = 'Contact must be a valid 10-digit number';
        }
        if (formData.age && (formData.age < 18 || formData.age > 100)) {
            errors.age = 'Age must be between 18 and 100';
        }
        if (!formData.gender || formData.gender === "Select Gender") {
            errors.gender = 'Gender is required';
        }
        // if (!formData.file) {
        //   errors.file = 'Resume upload is required';
        // }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Submitted", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,  // handle file upload separately
        }));
    };

    return (
        <>
            <h1>Form Validation [without using multiple States]</h1>
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="firstname">First Name*:</label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
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
                                value={formData.lastname}
                                onChange={handleInputChange}
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
                                value={formData.email}
                                onChange={handleInputChange}
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
                                value={formData.password}
                                onChange={handleInputChange}
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
                                value={formData.confirmpassword}
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                            />
                        </div>
                        {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="contact">Contact*:</label>
                            <input
                                type="tel"
                                name="contact"
                                id="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
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
                                value={formData.age}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.age && <p className="error">{errors.age}</p>}
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="gender">Gender*:</label>
                            <select
                                name="gender"
                                id="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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

export default FormVal2;
