import './App.css';
import { useState, useEffect } from 'react';
import Password from './Password'

git config --global user.email "you@example.com"
git config --global user.name "Your Name"
function App() {

  const [password, setPassowrdValue] = useState("")
  const [passwordValue, setpasswordValue] = useState('Weak')
  const [passVibe, setPassVibe] = useState(true)
  const [isShown, setIsSHown] = useState(false);
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
 
  function ChangeNumber(e){
    setPassowrdValue((e.target.value))
  }

useEffect (() => {
if (password.length > 2){
  setPassVibe(false)
  console.log(passVibe)
}
else{
  setPassVibe(true)
}
}, [setPassVibe,password,passVibe]
)
  

  function setPassowrd(password){
    setpasswordValue(password)
  }

  return (
    <div className="App">
      <h2>Insert your password:</h2>
      <input type={isShown ? "text" : "password"} value={password} onChange = {ChangeNumber}/>
      <div className="checkbox-container">
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
      <p></p>
      <button disabled={passVibe} >Submit</button>
      <p></p>
        <h3>Your password is {passwordValue}</h3>
      <Password  password = {password} setPassowrd = {setPassowrd} ></Password>
    </div>
  );
}

export default App;


