import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text">Error</p>
        <p>Please enter a search term</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
