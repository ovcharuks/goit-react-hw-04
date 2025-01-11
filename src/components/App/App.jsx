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

const notify = () => toast("необхідно ввести текст для пошуку зображень");

const BASE_URL = "https://api.unsplash.com";
const KEY = "nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIserror] = useState(false);
  const [serchValue, setSerchValue] = useState("");
  const [page, setPage] = useState(0);

  const handleSearchValue = (valueFromInput) => {
    setSerchValue(valueFromInput);
  };

  const nextPagePusher = (nextPage) => {
    setPage((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    // axios.get('https://api.unsplash.com/photos/?;client_id=nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs')
    // .then((response)=> setPhotos(response.data))
    const getPhotosData = async () => {
      try {
        setIsLoading(true);
        setIserror(false);
        setSerchValue("");
        const response = await axios.get(`${BASE_URL}/search/photos`, {
          params: {
            client_id: "nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs",
            page,
            per_page: 1,
            query: serchValue,
          },
        });
        console.log(response.data);
        setPhotos(response.data.results);
      } catch (error) {
        setIserror(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosData();
  }, [serchValue, page]);

  return (
    <>
      <SearchBar notify={notify} onSearch={handleSearchValue} />
      {serchValue.trim() === "" && (
        <h2>Необхідно ввести текст для пошуку зображень</h2>
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {isError && <ErrorMessage />}
      <LoadMoreBtn onNextPage={nextPagePusher} />
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
