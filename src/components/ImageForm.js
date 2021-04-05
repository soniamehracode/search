import React, { useState } from "react";
import "./ImageForm.css";

const ImageForm = (props) => {
  const [image, setImage] = useState("");

  const onImageSearch = (e) => {
    props.onImageSearch(image);
  };

  const changeImageSearch = (e) => {
    setImage(e.target.value);
  };
  return (
    <div className="inputFeild">
      <input
        type="text"
        value={image}
        onChange={changeImageSearch}
        placeholder="search for a image"
      />
      <button className="btn" onClick={onImageSearch} type="submit">
        submit
      </button>
    </div>
  );
};

export default ImageForm;
