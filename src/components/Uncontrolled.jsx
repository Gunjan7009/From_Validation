import React, { useRef } from 'react';

function Uncontrolled() {
    // Initialize useRef for first name and last name input fields
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);

    // Handle form submission
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('First Name:', fnameRef.current.value);
        console.log('Last Name:', lnameRef.current.value);
    };

    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <p>[In uncontrolled components, form inputs are not tied to React's state. You can use useRef to capture and manipulate form values without needing to store them in state]</p>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder="First Name"
                    ref={fnameRef}
                />
                <br /> <br />
                <input
                    type='text'
                    placeholder="Last Name"
                    ref={lnameRef}
                />
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Uncontrolled;
