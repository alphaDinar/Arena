import { icon, iconFont } from '../../External/Design';
import styles from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { fireAuth, googleProvider } from '../../Firebase/Base';


const Navbar = () => {
  const navigate = useNavigate();
  const [menuToggled, setMenuToggled] = useState('');
  const [loginMode, setLoginMode] = useState(true);
  const [formBoxToggled, setFormBoxToggled] = useState(false);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleMenu = () => {
    menuToggled ? setMenuToggled(false) : setMenuToggled(true);
  }

  const toggleFormBox =()=>{
    formBoxToggled ? setFormBoxToggled(false) : setFormBoxToggled(true);
  }

  const handleForm =()=>{
    navigate('/dashboard')
  }
  
  const googleLogin =()=>{
    signInWithPopup(fireAuth, googleProvider)
    .then((res)=>{
      navigate('/dashboard')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <section className={styles.navbar}>
        <legend>Logo</legend>
        <nav style={menuToggled ? { top: 0 } : { top: '-200px' }}>
          <Link>Home <sub></sub> </Link>
          <Link>About <sub></sub></Link>
          <Link>FAQ <sub></sub></Link>
          <Link onClick={()=>{toggleFormBox(); setLoginMode(true)}}>Login <sub></sub></Link>
          <Link onClick={()=>{toggleFormBox(); setLoginMode(false)}}>Register <sub></sub></Link>
          <button onClick={toggleMenu}>{icon('menu')}</button>
        </nav>
        <legend>Ad</legend>
      </section>

      <section className={formBoxToggled ? `${styles.registerForm} ${styles.change}` : styles.registerForm}>
        <sup onClick={toggleFormBox}>{icon('close')}</sup>
        <header>
          {loginMode ?
            <h3>Login <sub></sub></h3> :
            <h3>Register <sub></sub></h3>
          }
        </header>
        <form onSubmit={(e) => { e.preventDefault(); handleForm() }}>
          <p>
            <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='phone' />
          </p>
          <p>
            <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
          </p>
          {!loginMode &&
            <p>
              <input type="text" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='confirm password' />
            </p>
          }

          {loginMode ?
            <button type="submit">Login</button> :
            <button type="submit">Register</button>
          }

          {loginMode ?
            <small onClick={() => { setLoginMode(false); console.log('me'); console.log(loginMode) }}>Don't have an account yet? Register here.</small>
            :
            <small onClick={() => { setLoginMode(true) }}>Do you already have an acoount? login instead.</small>
          }
        </form>
        <hr />

        <legend onClick={googleLogin}>
          {iconFont('fa-brands fa-google', 'black')}
          <small>Sign in with Google</small>
        </legend>
      </section>
    </>
  );
}

export default Navbar;