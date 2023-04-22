import {Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useLocation } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode'



function Header() {
  
  const location = useLocation();

  return (
    <div className={styles['header--container']}>
        <Link className={styles['header--main']} to='/'> <img className={styles['header--avatar']} alt="Stepan Orlov" src='./src/assets/avatar.png' /> Stepan Orlov  </Link>
        <div className={styles['routes--container']}>
            <Link to='/profile' className={styles['routes--profile']}> Profile </Link>
            <Link to='/projects' className={styles['routes--profile']}> Projects </Link>
            <DarkMode />
        </div>
    </div>
  )
}

export default Header