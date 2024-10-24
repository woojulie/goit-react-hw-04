import React from "react";
import ImageCard from "./ImageCard";

function ImageGallery({ images, openModal }) {
  return (
    <div className="content-container">
      <ul className="image-gallery">
        {images.map((image) => (
          <li className="image-item" key={image.id}>
            <ImageCard image={image} onClick={() => openModal(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
