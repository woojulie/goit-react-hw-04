import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default ImageModal;
