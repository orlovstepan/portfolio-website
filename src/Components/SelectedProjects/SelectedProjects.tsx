import styles from './styles.module.scss';
import { Link } from 'react-router-dom'

function SelectedProjects() {
  return (
    <section className={styles['selected-projects--container']}>
      <h2>Something I have worked on</h2>        
      <Link to='/falling-walls' className={styles['selected-projects--individual']}>
        <img className={styles['selected-projects--image']} src='/src/assets/falling-walls.png' />
        <div className={styles['selected-projects--text-section']}>
          <h3>Falling Walls</h3>
          <p> I have worked for Falling Walls since October 2021 till April 2023. </p>
          <p> See what I did there → </p>
        </div>
      </Link>
      <Link to='/password-generator' className={styles['selected-projects--individual']}></Link>
      <Link to='/meme-generator' className={styles['selected-projects--individual']}></Link>
    </section>
  )
}

export default SelectedProjects;
