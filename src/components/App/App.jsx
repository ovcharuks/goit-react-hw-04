import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '/src/components/ErrorMessage/ErrorMessage';



const notify = () => toast('необхідно ввести текст для пошуку зображень');

const BASE_URL = 'https://api.unsplash.com';
const KEY = 'nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs';

function App() {

const [photos, setPhotos] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIserror] = useState(false);




useEffect (() => {
// axios.get('https://api.unsplash.com/photos/?;client_id=nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs')
// .then((response)=> setPhotos(response.data))
const getPhotosData = async () => {
  
  try {
    setIsLoading(true)
    const response = await axios.get(`${BASE_URL}/photos/?client_id=${KEY}`
    )
    
    setPhotos(response.data)
  } catch (error) {
    console.log(error);
    setIserror(true)
  }finally{
    setIsLoading(false);
  }
};
getPhotosData()
}, [])
console.log(photos);
  return (
    <>
      <SearchBar notify={notify}/>
      {isLoading && <Loader />}
     {photos.length > 0 && <ImageGallery photos ={photos}/>}
     {isError && <ErrorMessage />}
    
      <div>
      <button onClick={notify}>Make me a toast</button>
    
      <Toaster />
    </div>
    </>
  )
}

export default App
