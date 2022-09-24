import Signin from './login';
import Home from './homepage';
import * as React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function AuthPage() {
  const [currentUser, getUser] = React.useState(false);
  React.useEffect(() => {
      let user = localStorage.getItem('isLoggden');
      getUser(user);
        console.log("LocalState: ", user)
    
}, []);
 

  
  return (
    <div>
     
   {currentUser || currentUser!= null ? <Home/>:<Signin/>}
   <footer className={styles.footer}>
        <a
          href="https://aledraak.com.iq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' AL-Edraak '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
   </div>
  )
}
