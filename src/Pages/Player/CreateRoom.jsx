import TopNav from "../../Components/TopNav/TopNav";
import styles from '../../Styles/Player/createRoom.module.css';

const CreateRoom = () => {
  // style={{height:200}}
  return (
    <>
      <section className="blueBox">
        <TopNav />
        <h3>Create Room <sub></sub></h3>
      </section>

      <section className="wrapper">
        <section className={styles.formBox}>
          <form>
            <div>
              <span>Room Name</span>
              <input type="" name="" value="" />
            </div>
            <div>
              <span>Room Type</span>
              <select>
                <option hidden>Room Type</option>
                <option value="">Open</option>
                <option value="">Invite</option>
              </select>
            </div>
            <button type="submit">Create</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default CreateRoom;