import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styles from './infoabt.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
const InfoAbt = () => {
    const {id} = useParams(); 
  

  const [posts, setPosts] = useState([]);
  const [blockColor, setBlockColor] = useState('#fff');
  const changeBlockColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBlockColor(newColor);
  };
  useEffect(() => {      
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then((data) =>setPosts(data));
            
  }, []);

  

  return (
    <>
      <h1 className={styles.title}>Данные из API</h1>
      <Button variant = "contained"  onClick={changeBlockColor}>
        Change block color
      </Button>
      <ul className={`${styles.postsList} ${styles.flexContainer}`}>
        {posts.map((post) => (
          <li key={uuidv4()} className={styles.post}>
            <div className={styles.postBlock} style={{ backgroundColor: blockColor }}>
              <h5 className={styles.postTitle}>{post.title}</h5>
              <p className={styles.postBody}>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default InfoAbt;
