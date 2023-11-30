import styles from '../../Styles/Player/dashboard.module.css';
import bg1 from '../../assets/bg1.webp';
import dash from '../../assets/headRoom.avif';
import game from '../../assets/game.png';
import player from '../../assets/player.png';
import logo1 from '../../assets/logo1.png';
import RoomBox from '../../Components/RoomBox/RoomBox';
import { icon } from '../../External/Design';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { fireAuth } from '../../Firebase/Base';
import TopNav from '../../Components/TopNav/TopNav';

const Dashboard = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        if (user.displayName) {
          setUsername(user.displayName);
        }
      }
    })
  }, [])


  return (
    <section className={styles.dashboard}>
      <section className="banner"></section>
      <main>
        <TopNav/>

        <section className={styles.lowBox}>
          <section className={styles.profileBox}>
            <header>
              <article>
                <img src={game} alt="" />
                <span>{username || 'Bright781'} </span>
                <small>Legend</small>
              </article>
              <div>
                <p>
                  <strong>43</strong>
                  <span>Active Rooms</span>
                </p>
                <p>
                  <strong>43</strong>
                  <span>Active Rooms</span>
                </p>
              </div>
            </header>
          </section>
          <section className={styles.gameBox}>
            <section className={styles.featuredBox}>
              <div>
                <nav>
                  {icon('sports_esports')}
                  {icon('tactic')}
                </nav>

                <article>
                  <small>La Liga</small>
                  <p>
                    <span>Real Madrid</span>
                    <span>Athletico Madrid</span>
                  </p>
                  <nav>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                  </nav>
                </article>
              </div>
              <header>
                <img src={player} alt="" />
              </header>
              <div>
                <p>
                  <legend>00 : 12 : 29 </legend>
                  <strong>
                    GHc 4,500
                  </strong>
                </p>

                <nav className="activeBox">
                  <img src={player} />
                  <img src={player} />
                  <img src={player} />
                  <img src={player} />
                  <small>+ 4 more</small>
                </nav>
              </div>
            </section>



          </section>
        </section>

        <section className={styles.roomBoxHolder}>
          <header>
            <legend>Top</legend>
            <legend>Upcoming</legend>
            <legend>La Liga</legend>
            <legend>Premier League</legend>
            <legend>Serie A</legend>
          </header>
          <RoomBox />
        </section>
      </main>
    </section>
  );
}

export default Dashboard;