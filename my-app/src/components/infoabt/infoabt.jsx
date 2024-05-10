import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const InfoAbt = () => {
    const {id} = useParams(); 
  

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {      
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then((data) =>setPosts(data));
            
  }, []);

  

  return (
    <>
      <h1>Данные из API</h1>
        {posts.map((post) => (
                  <li key={post.id} >
                    <div>
                      <h5>{post.title}</h5>
                      <p className>{post.body}</p>
                    </div>
                  </li>
                ))
        }
    </>
  );
}

export default InfoAbt;
