

import React from 'react';
import { useForm } from 'react-hook-form';
import './FromVal.css';

const FormValidation = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted", data);

        reset(); 
    };

    return (
        <>
            <h1>Form Validation [using useForm]</h1>
            <div className='main'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="firstname">First Name*:</label>
                            <input
                                type="text"
                                id="firstname"
                                {...register('firstname', { required: 'First Name is required' })}
                                placeholder="Enter First Name"
                            />
                            {errors.firstname && <p className="error">{errors.firstname.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="lastname">Last Name*:</label>
                            <input
                                type="text"
                                id="lastname"
                                {...register('lastname', { required: 'Last Name is required' })}
                                placeholder="Enter Last Name"
                            />
                            {errors.lastname && <p className="error">{errors.lastname.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="email">Email*:</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Email is invalid',
                                    },
                                })}
                                placeholder="Enter Email"
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="password">Password*:</label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },
                                })}
                                placeholder="Enter Password"
                            />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="confirmpassword">Confirm Password*:</label>
                            <input
                                type="password"
                                id="confirmpassword"
                                {...register('confirmpassword', {
                                    required: 'Confirm Password is required',
                                    validate: (value) => value === watch('password') || 'Passwords do not match',
                                })}
                                placeholder="Confirm Password"
                            />
                            {errors.confirmpassword && <p className="error">{errors.confirmpassword.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="contact">Contact*:</label>
                            <input
                                type="tel"
                                id="contact"
                                {...register('contact', {
                                    required: 'Contact number is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Contact must be a valid 10-digit number',
                                    },
                                })}
                                placeholder="Enter Mobile Number"
                            />
                            {errors.contact && <p className="error">{errors.contact.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                {...register('age', {
                                    min: { value: 18, message: 'Age must be at least 18' },
                                    max: { value: 100, message: 'Age must be no more than 100' },
                                })}
                            />
                            {errors.age && <p className="error">{errors.age.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="gender">Gender*:</label>
                            <select id="gender" {...register('gender', { required: 'Gender is required' })}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <p className="error">{errors.gender.message}</p>}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="left">
                            <label htmlFor="file">Upload Resume*:</label>
                            <input
                                type="file"
                                id="file"
                                {...register('file', { required: 'Resume upload is required' })}
                            />
                            {errors.file && <p className="error">{errors.file.message}</p>}
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default FormValidation;
