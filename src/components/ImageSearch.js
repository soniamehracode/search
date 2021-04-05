import React, { useState, useEffect } from "react";
import "./ImageSearch.css";
import ImageForm from "./ImageForm";

const ImageSearch = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async (image) => {
    const urlApi = `https://api.unsplash.com/search/photos?query=${image}&client_id=W7NpqgxS4t3cANc0TdH1Yy3k3qrtY9-6PgmQZ8T5Mdo`;

    try {
      const response = await fetch(urlApi);
      const json = await response.json();
      console.log(json);
      setImages(json.results);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <ImageForm onImageSearch={getImage} />
      </div>

      <div className="container">
        {images.map((image) => {
          return (
            <div className="card">
              <img src={image.links.download} />
              <h1>{image.alt_description}</h1>
              <p>{image.likes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSearch;
