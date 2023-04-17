import {Link } from 'react-router-dom'
import styles from './styles.module.scss'

type Props = {
    darkTheme: boolean,
    toggleDarkTheme: () => void
}

function Header({darkTheme, toggleDarkTheme}: Props) {
  return (
    <div className={styles['header--container']}>
        <Link to='/'> Stepan Orlov </Link>
        <div className='routes--container'>
            <Link to='/profile' className={styles['routes--profile']}> Profile </Link>
            <Link to='/projects' className={styles['routes--profile']}> Projects </Link>
            <button onClick={toggleDarkTheme} className={styles['header--dark-theme']}>{darkTheme ? "☀" : "☽"}</button>
        </div>
    </div>
  )
}

export default Header