import React, { useState } from "react";
import { createClient } from 'pexels';
import './ImageSearch.css';

const client = createClient('VkpXApWnyynNn5JBfDhU3EfE46dqoCbYHRR802ClX7tTfRkyruhwLG1c');

export default function ImageSearch(props) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  function fetchPhotos(searchTerm) {
    setLoading(true);
    client.photos.search({ query: searchTerm, per_page: 6 })
      .then(response => {
        setPhotos(response.photos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setPhotos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (props.searchTerm && query !== props.searchTerm) {
    setQuery(props.searchTerm);
    fetchPhotos(props.searchTerm);
  }

  return (
    <div className="container-fluid ImageSearch">
      {!loading && photos.length > 0 && (
        <div className="row justify-content-center">
          <div className="gallery">
            <p className="text-muted pt-2 pe-2">Gallery</p>
            {photos.map(photo => (
              <img
                key={photo.id} 
                src={photo.src.medium}
                alt={photo.photographer}
                className="col-md-4 col-sm-6 col-12 mb-2 img-fluid rounded shadow-sm"
              />
            ))}
          </div>
        </div>
      )}
  
      {loading && (
        <div className="row justify-content-center">
          <p>Loading...</p>
        </div>
      )}
  
      {!loading && photos.length === 0 && (
        <div className="d-none">
        </div>
      )}
    </div>
  );
  
}
