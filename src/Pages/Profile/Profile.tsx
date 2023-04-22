import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

function Profile() {
  return (
    <div className={styles['profile-container']}>
        <img className={styles['profile-avatar']} src='/src/assets/avatar.png' />

        <div className={styles['profile-about']}>
          <p> 👋🏼 Hi again, I'm Stepan, a frontend developer living in Berlin. I have been programming for more than two years now and loved every minute of it (pretty much).
            <br />I am currently on a hunt for a new challenge, but also working and helping out other developers as a freelancer. 
          </p>
        <hr/>
        <section className={styles['profile-skills']}>
          <p> I mainly build websites with <strong>React</strong> and <strong>Typescript</strong>, but I am very open-minded and always happy to learn
          new frameworks, libraries, languages and approaches to coding.
          </p>
          <p> 
                  I have graduated from Spiced Academy Full Stack coding boot camp, so here's some stuff I am also familiar with:
          </p>
              <ul>
                  <li>JavaScript (ES6), jQuery, Typescript, HTML5, CSS3</li>
                  <li>Frontend: React, Redux, Vue.js, Angular, Figma</li>
                  <li>Backend: Node.js, Express.js, Socket.IO</li>
                  <li>Database: PostgreSQL</li>
                  <li>Hosting: AWS (S3), Heroku</li>
                  <li>Other: Wordpress, PHP</li>
              </ul>
              <Link to={'/projects'}>See some of my projects → </Link>
          </section>
          <hr />
            <section className={styles['profile-experience']}>
              <h3>Experience</h3>
              <div className="profile-experience--company">
                <p className='profile-experience--company-headline'> <strong>Falling Walls </strong> <small>(2021 - 2023)</small> </p>
                <p> As a frontend developer at Falling Walls I was mainly responsible for the website layout, building new features, components and WordPress modules. 
                  I always tried to focus on responsiveness and accessibility.
                </p>
              </div>
              <div className="profile-experience--company">
                <p className='profile-experience--company-headline'> <strong>Simplaex </strong> <small>(2019 - 2021)</small> </p>
                <p> I joined Simplaex as a Business Development Manager and not long after that we launched <a href='ogno.io'>Ogno </a>, a digital marketing desk.
                I was focusing on market strategy, competitor analysis and lead generation. I have also implemented a clear reporting system with Hubspot reports and dashboards.
                </p>
              </div>
              <div className="profile-experience--company">
                <p className='profile-experience--company-headline'> <strong>Leverton </strong> <small>(2017 - 2019)</small> </p>
                <p> Leverton was my first company in Berlin where I worked as a Business Development Manager. Leverton had a sophisticated AI-based product that used machine learning 
                  to extract data from complex documents and output it in an organized way. I focused on market research and competitor analysis as well as email marketing 
                  and lead generation. In order to be up-to-date with the product features I spent a good amount of time speaking to product managers and developers.
                </p>
              </div>
            </section>
          </div>
    </div>
  )
}

export default Profile