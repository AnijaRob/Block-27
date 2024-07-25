import { useState } from "react"


const Authenticate = () => {
  const[firstNameInput,setFirstNameInput] = useState(``);
  const[lastNameInput,setLastNameInput] = useState(``);
  const[emailInput,setEmailInput] = useState(``);
  const[passwordInput,setPasswordInput] = useState(``);
  const [error,setError] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     } catch (error) {
        setError(error.message);
      }
    }
    
   
    
    console.log(`yerrr`) 

  }
  
  return(
    <>
   <h2>Authenticate</h2>
      {error && <p>{error}</p>}
   <form onSubmit={handleSubmit}>
    <label for = "fname"></label>
    <input type = "text" id="fname" placeholder="First Name"
      value={firstNameInput} onChange={(event) => setFirstNameInput(event.target.value)}></input><br></br>
    <label for ="lname"></label>
    <input type="text" id="lname" placeholder="Last Name"
      value={lastNameInput} onChange={(event) => setLastNameInput(event.target.value)}></input><br></br>
    <label for="email"></label>
    <input type="email" id="emai;" placeholder="Email"
      value={emailInput} onChange={(event) => setEmailInput(event.target.value)}></input><br></br>
    <label for="password"></label>
    <input type="password" id="password" placeholder="Password"
      value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)}></input><br></br>
    <button>Sign Up!</button>
   </form>
  </>
  

  )
 
  

export default Authenticate