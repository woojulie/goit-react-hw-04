import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import "./App.css";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=lwiT1_v-daXQa1FLBrzGo3W_olKdzVIGpEZYQ_it0x4`
        );
        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <p className="error-message">Error: {error}</p>}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
