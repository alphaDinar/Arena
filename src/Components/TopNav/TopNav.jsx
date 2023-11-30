import game from '../../assets/game.png';

const TopNav = () => {
  return (
    <section className="topNav">
      <nav>
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