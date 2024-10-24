import React from "react";

function LoadMoreBtn({ onClick }) {
  return (
    <button onClick={onClick} className="load-more-btn">
      Load more
    </button>
  );
}

export default LoadMoreBtn;
