import styles from './roomBox.module.css';
import player from '../../assets/winner.png';
import { icon } from '../../External/Design';
import bg2 from '../../assets/bg2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RoomBox = () => {
  const room = {
    rid: 'r00000',
    name: 'eagles',
    status: 'active',
    members: [
      {uid: 'u000', name: 'emma', games: '10', won: '5', img: 'https' },
      {uid: 'u000', name: 'emma', games: '10', won: '5', img: 'https' },
      {uid: 'u000', name: 'emma', games: '10', won: '5', img: 'https' }
    ],
    currentGame : {
      selections : [
        {uid: 'u000', name: 'emma',img: 'https', selection : {
          games : [],
          code : '#aclkasckl',
          odds : 10,
          currentOds : '',
        }}
      ],
      price : 6000,
      startsAt : 'today',
      endsAt : 'tommor'
    },
    timestamp : '0000'
  };
  

  useEffect(()=>{
    AOS.init({
      duration: "1000",
    })
  }, [])

  return (
    <section className={styles.roomBox}>
    {Array(12).fill().map((el,i)=>(
      <div className={styles.room} data-aos="fade-up" data-aos-delay={10 * i}>
        <div className={styles.left}>
          <article>
            <small>Premier League</small>
            <p>
              <span>Man City</span>
              <small>  Vs  </small>
              <span>Liverpool</span>
            </p>

            <ul>
              <sub></sub>
              <sub></sub>
              <sub></sub>
            </ul>

          </article>

          <a href="" style={{backgroundImage: `url(${bg2})`}}>{icon('north_east')}</a>
        </div>

        <div className={styles.right}>
          <p>
            <legend>00 : 25 : 10</legend>
            <strong>GH₵ 5,000</strong>
          </p>
          <nav>
            <img src={player} alt="" />
            <img src={player} alt="" />
            <img src={player} alt="" />
            <small>+ 3 more</small>
          </nav>
        </div>
      </div>
    ))}

      
    </section>
  );
}

export default RoomBox;



// <div className={styles.room}>
//         <div className={styles.left}>
//           <article>
//             <small>Premier League</small>
//             <p>
//               <span>Man City</span>
//               <span>Liverpool</span>
//             </p>
//           </article>

//           <nav className='activeBox'>
//             <img src={player} alt="" />
//             <img src={player} alt="" />
//             <img src={player} alt="" />
//             <img src={player} alt="" />
//             <small>+ 3 more</small>
//           </nav>
//         </div>

//         <div className={styles.right}>
//           <p>
//             <sup></sup>
//           </p>
//         </div>
//       </div>