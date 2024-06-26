
import React, { useEffect, useState } from "react";
import { createClient } from 'pexels';
import axios from "axios";

const client = createClient('VkpXApWnyynNn5JBfDhU3EfE46dqoCbYHRR802ClX7tTfRkyruhwLG1c'); // Replace with your actual API key
const query = 'Nature';

export default function ImageSearch() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    client.photos.search({ query, per_page: 1 })
      .then(response => {
        setPhotos(response.photos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Photos of Nature</h2>
      <div>
        {photos.map(photo => (
          <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
        ))}
      </div>
    </div>
  );
}

