import styles from './courseslistApi.module.scss';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";


// const StyledModal = styled(Modal)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: 'rgba(0, 0, 0, 0.4)',
// });


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  // backgroundColor: 'rgba(0, 0, 0, 0.4)',
};  



const CourseslistApi = () => {
  

  const [users, setUsers] = useState([]);
  const [newColor, setNewColor] = useState([])
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [textFilter, setTextFilter] = useState('');
  const [ filteredProducts, setFiltredProducts ] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  
  const handleChange = () => {
    setNewColor();
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        setUsers(json);
        Promise.all(json.map(user => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)))
          .then(responses => Promise.all(responses.map(response => response.json())))
          .then((postsList) => {
            const allPosts = postsList.flat();
            setPosts(allPosts);
            setLoaded(true);
          });
      });
  }, []);

  useEffect(() => {

    const t = users.filter(item => item.name.includes(textFilter))
    console.log(t);
    setFiltredProducts(t);
  }, [textFilter])

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const toggleLike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, liked: !post.liked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleFilterChange = (e) => {
    setTextFilter(e.target.value);
  };
  const handleShowClick = () => {
    setFiltredProducts(users.filter(item => item.name.includes(textFilter)));
    setOpen(false);
  };

  return (
    <>
      <h1>Данные из API</h1>
      {
        !loaded && <Box >
        <CircularProgress />
      </Box>
      }
      {/* {/* <p> {textFilter}</p> */}
      <Button variant="outlined" color="secondary"> Change color</Button>
      <Button variant="contained" onClick={handleOpen}>Search</Button>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter name of author
          </Typography>
          <TextField id="standard-basic" label="Filter" variant="standard"
            value={textFilter}
            onChange={handleFilterChange}
          />
          <Button variant="contained" onClick={handleCloseModal}>
            Show
          </Button>
        </Box>
      </Modal>
      <div className={styles.container}>
      
        {
        (textFilter === '')?
        users.map((user) => (
          <div key={user.id} className={styles.user}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <h4>Their Posts:</h4>
            <ul className={styles.posts}>
              {posts
                .filter((post) => post.userId === user.id)
                .map((post) => (
                  <li key={post.id} className={styles.post}>
                    <div className={styles.postContainer}>
                      <h5>{post.title}</h5>
                      <p className={styles.postContent}>{post.body}</p>
                      <Button variant = "outlined"
                        onClick={() => toggleLike(post.id)}
                      >
                        {post.liked ? 'Dislike' : 'Like'}
                        </Button>
                      <Button variant = "contained"
                        className={styles.deleteButton}
                        onClick={() => deletePost(post.id)}
                      >
                        Delete
                      </Button>
                      <Link to={`/catalogapi/${user.id}/posts`}> лолкек</Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))
        :
        filteredProducts.map((user) => (
          <div key={user.id} className={styles.user}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <h4>Their Posts:</h4>
            <ul className={styles.posts}>
              {posts
                .filter((post) => post.userId === user.id)
                .map((post) => (
                  <li key={post.id} className={styles.post}>
                    <div className={styles.postContainer}>
                      <h5>{post.title}</h5>
                      <p className={styles.postContent}>{post.body}</p>
                      <Button variant = "outlined"
                        onClick={() => toggleLike(post.id)}
                      >
                        {post.liked ? 'Dislike' : 'Like'}
                        </Button>
                      <Button variant = "contained"
                        className={styles.deleteButton}
                        onClick={() => deletePost(post.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))
        }
      </div>
    </>
  );
}

export default CourseslistApi;