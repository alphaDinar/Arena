import { useState } from 'react';
import { icon } from '../../External/Design';
import game from '../../assets/game.png';
import styles from './topNav.module.css';

const TopNav = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    menuToggled ? setMenuToggled(false) : setMenuToggled(true);
  }

  return (
    <section className={styles.topNav}>
      <nav style={menuToggled ? { top: 0 } : { top: '-220px' }}>
        <sup onClick={toggleMenu}>{icon('menu')}</sup>
        <a href="/dashboard">Dashboard</a>
        <a href="/createRoom">Create Room</a>
        <a href="">Join Room</a>
        <a href="">Test Code</a>
        <a href="">Leaderboard</a>
      </nav>
      <img src={game} />
    </section>
  );
}

export default TopNav;