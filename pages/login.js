import cx from 'classnames';
import styles from '../styles/Signin.module.css'
import * as React from 'react';
import axios from "axios";

export default Signin;

function Signin() {
    const [userTextValue, setUserTextValue] = React.useState('');
    const [passwordTextValue, setPasswordTextValue] = React.useState('');

    const onUserTextChange = e => setUserTextValue(e.target.value);
  const onPasswordTextChange = e => setPasswordTextValue(e.target.value);
  async function onSubmit() {
   
    console.log(';sdss')
    try {
      const body = {
        username:userTextValue,
        password:passwordTextValue,
      
      }
     
      console.log(body);
    const res = await axios.post('/api/loginApi', body);
    
    if (res.status === 203) {
        localStorage.setItem('user',res.data);
       const user = localStorage.getItem('user')
       localStorage.setItem('isLoggden',true);

      //setOpen(false);
      console.log(user)
  }
    }catch (err){
      console.log(err.message)
      
    }
   
    location.reload();
  };
  return (
    <>

      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input onChange ={onUserTextChange} type="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">username</label>
          </div>
          <div className="form-floating">
            <input onChange={onPasswordTextChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button onClick={()=> onSubmit()} className="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
        </form>
      </main>

    </>
  )
}