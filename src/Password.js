import { useEffect } from "react";
function Password(props) {

    const {password,setPassowrd} = props

    useEffect(()=>{
        if(password.length < 3){
          setPassowrd('Weak')
        }
        if(password.length >= 3 && password.length <= 6){
            setPassowrd('Medium')
        }
        if(password.length > 6){
            setPassowrd('Strong!')
        }
      },[setPassowrd,password])

  return (
    <div>
    </div>
  );
}

export default Password;