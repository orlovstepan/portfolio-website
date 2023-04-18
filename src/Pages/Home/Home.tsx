import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import Circles from "../../Components/Circles/Circles"
import SelectedProjects from "../../Components/SelectedProjects/SelectedProjects"
import { useState, useEffect } from "react";


function Home() {

  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);
  

  return (
    <>
    <Circles/>
    <div className={`${styles["home-container"]} ${showAnimation ? styles['animate'] : ''}`}>
        <h1 className={styles['home--headline']}>A frontend developer interested in solving business challenges with technologies</h1>
        <section className={styles['home--paragraph-container']}>
            <p className={styles['home--paragraph']}> 👋🏼 Hey, I'm Stepan, a frontend web developer based in Berlin.
             I used to be a business development manager, but then I switched to programming.
             I graduated a full stack web development bootcamp and worked at a Berlin-based NGO and some freelance projects.
             </p>
             <p>
                I create websites and apps mostly with <strong>React/Redux</strong> and <strong>Typescript</strong>.
             </p>
             
        <Link to='/profile'>View profile → </Link>
        </section>
    </div>
    <SelectedProjects />
    </>
  )
}



export default Home