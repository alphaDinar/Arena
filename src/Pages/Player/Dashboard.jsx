import { Link } from "react-router-dom";
import PlayerSidebar from "../../Components/playerSidebar/PlayerSidebar";
import { icon } from "../../External/Design";
import styles from '../../Styles/Player/dashboard.module.css';
import game from '../../assets/game.png';
import topBg from '../../assets/headRoom.avif';
import room2 from '../../assets/room2big2.jpg';

const Dashboard = () => {
  return (
    <section>
      <PlayerSidebar />
      <section className={styles.wrapper}>
        <main>
          <section className={styles.topBox}>
            <section style={{ backgroundImage: `url(${topBg})` }}>
              <header>
                <img src={topBg} />
                <img src={game} />
                <img src={game} />

                <small>+ 10 more</small>
              </header>

              <footer>
                <p>
                  <span>{icon('trophy')} <small>Prize</small> </span>
                  <strong>Ghc 80,000</strong>
                </p>
                <p>
                  <span>Ends In</span>
                  <legend>23 : 20 : 15</legend>
                </p>
              </footer>
            </section>
            <img src={game} className={styles.imgBox} />
          </section>

          <section className={styles.lowBox}>
            <nav>
              <Link>
                <legend>
                  {icon('stadia_controller')}
                </legend>
                <p>
                  <strong>Join a Room</strong>
                  <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
                  <button type="">{icon('north_east')}</button>
                </p>
              </Link>
              <Link>
                <legend>
                  {icon('group')}
                </legend>
                <p>
                  <strong>Create a Room</strong>
                  <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
                  <button type="">{icon('north_east')}</button>
                </p>
              </Link>
            </nav>
            <section className={styles.roomBox}>
              {[0, 0, 0, 0, 0].map((el) => (
                <Link className={styles.room} style={{ backgroundImage: `url(${room2})` }}>
                  <header>
                    <img src={game} />
                    <img src={game} style={{ position: 'relative', left: '-10px' }} />
                    <img src={game} style={{ position: 'relative', left: '-20px' }} />
                    <small style={{ position: 'relative', left: '-15px', color: 'wheat' }}> + 10</small>
                    <sub></sub>
                  </header>
                  <small>Blazers</small>
                  <p>
                    <small>{icon('trophy')} <small style={{fontFamily:'var(--bigFont)', fontSize:'0.9rem'}}>Prize</small></small>
                    <span>GH₵ 4,500</span>
                  </p>
                </Link>
              ))}
            </section>
          </section>
        </main>
        <section className={styles.sidePanel}>

        </section>
      </section>
    </section>
  );
}

export default Dashboard;