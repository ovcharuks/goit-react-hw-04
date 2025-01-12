import { Component, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "/src/components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const notify = () => toast("необхідно ввести текст для пошуку зображень");

const BASE_URL = "https://api.unsplash.com";
const KEY = "nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIserror] = useState(false);
  const [serchValue, setSerchValue] = useState("");
  const [page, setPage] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log(selectedPhoto);
  console.log(photos);
  const handleSearchValue = (valueFromInput) => {
    setSerchValue(valueFromInput);
    setPage(1);
    setPhotos([]);
  };

  const nextPagePusher = (nextPage) => {
    setPage((prev) => {
      return prev + 1;
    });
  };

  const openModal = (image) => {
    setSelectedPhoto(image);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    if (!serchValue) {
      return;
    }
    const getPhotosData = async () => {
      try {
        setIsLoading(true);
        setIserror(false);

        const response = await axios.get(`${BASE_URL}/search/photos`, {
          params: {
            client_id: "nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs",
            page,
            per_page: 9,
            query: serchValue,
          },
        });

        setPhotos((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        setIserror(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosData();
  }, [serchValue, page]);

  console.log("photoURLS", selectedPhoto);
  return (
    <>
      <SearchBar notify={notify} onSearch={handleSearchValue} />
      {serchValue.trim() === "" && (
        <h2>Необхідно ввести текст для пошуку зображень</h2>
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={openModal} />
      )}
      {isError && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn onNextPage={nextPagePusher} />}
      {
        // photos.length > 0
        selectedPhoto !== null && (
          <ImageModal photo={selectedPhoto} onClose={closeModal} />
        )
      }

      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
