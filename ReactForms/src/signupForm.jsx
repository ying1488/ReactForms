import { useState } from "react";

function SignUpForm(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(firstName,lastName);
  }
  return(
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
      type='text'
      placeholder="firstname" 
      value={firstName} 
      onChange={updateFirstName} 
      id="firstname"/>
      <label htmlFor="lastname">Last Name</label>
      <input
      type='text'
      placeholder="lastname" 
      value={lastName} 
      onChange={updateLastName} 
      id="lastname"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default SignUpForm;