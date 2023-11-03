import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { fireAuth } from "./Firebase/Base";
import { useEffect, useState } from "react";


const Test = () => {
  const solveCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(fireAuth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          console.log('wip')
        },
        'expired-callback': () => {
          console.log('expired')
        }
      });
    }
    // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
  }

  const [code, setCode] = useState('');

  const completeRegister =()=>{
    // const res = JSON.parse(sessionStorage.getItem('res'));

    window.confirmationResult.confirm(code)
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const register = () => {
    solveCaptcha()
    const verify = window.recaptchaVerifier;
    console.log(verify)
    signInWithPhoneNumber(fireAuth, '+233558420368', verify)
    .then((res)=>{
      console.log(res)
      window.confirmationResult = res;
      // console.log(JSON.stringify(res))
      // sessionStorage.setItem('res', JSON.stringify(res))
      // window.confirmationResult = res;
      // completeRegister(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // console.log(window.confirmationResult)

  // useEffect(()=>{
  //   window.confirmationResult = 'Alpha';

  //   console.log(window.confirmationResult)
  // })



  return (
    <section>
      <div id="recaptcha-container">

      </div>
      Test
      <button onClick={() => { register() }}>Button</button>
      <br/>
      <br/>
      <input style={{border:'1px solid black'}} type="number" value={code} onChange={(e)=>{setCode(e.target.value)}} />
      <button type="button" onClick={()=>{completeRegister()}}>Complete</button>      
    </section>
  );
}

export default Test;


