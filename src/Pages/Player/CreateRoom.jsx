import TopNav from "../../Components/TopNav/TopNav";
import styles from '../../Styles/Player/createRoom.module.css';

const CreateRoom = () => {
  return (
    <>
      <section className="banner"></section>
      <section className="wrapper">

        <TopNav />

        

      </section>
      <section className={styles.formBox}>
          <h3>Create Room <sub></sub></h3>

          <form>
            <p>
              <input type="" name="" value="" placeholder="Room Name" />
            </p>
            <p>
              <input type="" name="" value="" placeholder="Room Capacity" />
            </p>
            <p>
              <input type="" name="" value="" placeholder="Room Name" />
            </p>
            <p>
              <input type="" name="" value="" placeholder="Room Name" />
            </p>
            <button type="submit">Create</button>
          </form>
        </section>
    </>
  );
}

export default CreateRoom;