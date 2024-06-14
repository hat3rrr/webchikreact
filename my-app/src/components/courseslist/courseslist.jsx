import { useEffect, useState } from "react";
import { TextField, Button, Stack, Rating, Select, MenuItem } from "@mui/material";

import styles from './courseslist.module.scss';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <h3>{photo.title}</h3>
      <img src={photo.url} alt={photo.title} />
      <p>Album ID: {photo.albumId}</p>
      <Rating name="no-value" value={null} />
    </div>
  );
};

const CourseslistApi2 = () => {
  const [photos, setPhotos] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState(15);
  const [albumFilter, setAlbumFilter] = useState('');

  const uniqueAlbumIds = new Set(photos.map(photo => photo.albumId));
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  const loadMorePhotos = () => {
    setVisiblePhotos(prevVisiblePhotos => prevVisiblePhotos + 15);
  };

  const handleAlbumFilterChange = (event) => {
    setAlbumFilter(event.target.value);
  };
  const filteredPhotos = photos.filter(photo => albumFilter === '' || photo.albumId === parseInt(albumFilter));


  return (
    <div className={styles.container}>
      {/* <h1>Photos</h1> */}
      <div className={styles.filter}>
        <label htmlFor="album-filter">Filter by Album ID:</label>
        <select id="album-filter" value={albumFilter} onChange={handleAlbumFilterChange}>
          <option value="">All</option>
          {Array.from(uniqueAlbumIds).map(albumId => (
            <option key={albumId} value={albumId}>{albumId}</option>
          ))}
        </select>
      </div>
      <div className={styles.posts}>
        {filteredPhotos.slice(0, visiblePhotos).map(photo => (
          <div className={styles.user} key={photo.id}>
            <div className={styles.photoCard}>
              <PhotoCard photo={photo} />
            </div>
          </div>
        ))}
      </div>
      {visiblePhotos < filteredPhotos.length && (
        <Button variant="outlined" onClick={loadMorePhotos} className={styles.btn}>
          Еще
        </Button>
      )}
    </div>
  );
};

export default CourseslistApi2;