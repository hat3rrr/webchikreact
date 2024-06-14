
import { useEffect, useState } from "react";




const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <h3>{photo.title}</h3>
      <img src={photo.url} alt={photo.title} />
      <p>Album ID: {photo.albumId}</p>
    </div>
  );
};

const CourseslistApi = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="App">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default CourseslistApi;