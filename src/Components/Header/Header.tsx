import {Link } from 'react-router-dom'
import styles from './styles.module.scss'
import DarkMode from '../DarkMode/DarkMode'



function Header() {
  

  return (
    <div className={styles['header--container']}>
        <Link to='/'> Stepan Orlov </Link>
        <div className={styles['routes--container']}>
            <Link to='/profile' className={styles['routes--profile']}> Profile </Link>
            <Link to='/projects' className={styles['routes--profile']}> Projects </Link>
            <DarkMode />
        </div>
    </div>
  )
}

export default Header