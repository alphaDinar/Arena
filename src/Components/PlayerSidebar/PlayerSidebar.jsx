import { useState } from 'react';
import { icon } from '../../External/Design';
import styles from './playerSidebar.module.css';

const PlayerSidebar = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const toggleSidebar =()=>{
    sidebarToggled ? setSidebarToggled(false) : setSidebarToggled(true);
  }

  return (
    <section className={sidebarToggled ? `${styles.sidebar} ${styles.change}` : styles.sidebar}>
      <sup onClick={toggleSidebar}>{sidebarToggled ? icon('horizontal_rule') : icon('sort')}</sup>
      <article>
        <p>
          {icon('star')}
          <legend>
            <strong>100,000</strong>
            <span>Points</span>
          </legend>
        </p>

        <p>
          {icon('payments')}
          <legend>
            <strong>Ghc 50,000</strong>
            <span>Deposit</span>
          </legend>
        </p>

        <button>
          <span>Add Code</span>
          {icon('add')}
        </button>
      </article>

      <nav>

      </nav>
    </section>
  );
}

export default PlayerSidebar;