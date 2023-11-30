import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { fireStoreDB } from "../../Firebase/Base";
import { useEffect, useState } from "react";

const CreateRoom = () => {
  const coll = getDocs(collection(fireStoreDB, 'Categories/'))
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryUpdate = onSnapshot(collection(fireStoreDB, 'Categories/'), (querySnapshot) => {
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categories);
    });

    return () => categoryUpdate();

  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default CreateRoom;