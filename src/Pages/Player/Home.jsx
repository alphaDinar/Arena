import { icon } from '../../External/Design';
import styles from '../../Styles/Player/home.module.css';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/bg1.webp';
import bg2 from '../../assets/bg2.jpg';
import winner from '../../assets/winner.png';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <section className={styles.wrapper}>
      <Navbar/>
      <main className={styles.headBox}>
        <section className={styles.left}>
          <h3>
            Test Your Skills In The Arena
          </h3>

          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas in a dolorum,
            cumque minima eligendi, doloribus
          </small>

          <Link>
            <legend style={{ backgroundImage: `url(${bg2})` }}>Join A Group</legend>
          </Link>

          <article>
            <p>
              <sup></sup>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas in a dolorum,
              </small>
            </p>
            <Link>
              <sub>Explore {icon('chevron_right')}</sub>
            </Link>
          </article>
        </section>
        <section className={styles.right}>

          <section className={styles.customBox}>
            <div className={styles.curve} style={{ backgroundImage: `url(${bg1})` }}>
              <img src={winner} className={styles.winner} />
            </div>
          </section>

        </section>
      </main>

      <section className={styles.lowBox}>
        <header>
          <h3>Get Started</h3>
        </header>
        <Link>
          <legend>{icon('group')}</legend>
          <span>Join A Room</span>
          <sub>{icon('arrow_forward')}</sub>
        </Link>
        <Link>
          {icon('group_add')}
          <span>Create A Room</span>
          <sub>{icon('arrow_forward')}</sub>
        </Link>
        <Link>
          {icon('workspace_premium')}
          <span>Leaderboard</span>
          <sub>{icon('arrow_forward')}</sub>
        </Link>
      </section>
    </section>
  );
}

export default Home;