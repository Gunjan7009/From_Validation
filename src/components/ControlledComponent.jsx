import { useState } from "react";


const ControlledComponent = () => {
    let [fname , setFname] = useState('');
    let [lname, setLname] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted successfully');
        console.log(`First Name: ${fname}, Last Name: ${lname}`);
    };

  return (
    <div>
      <h1>Controlled Component </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            name="fname"
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type='text'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            name="lname"
            placeholder="Enter Last Name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ControlledComponent
