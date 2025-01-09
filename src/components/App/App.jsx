import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import ImageGallery from '../ImageGallery/ImageGallery';

const notify = () => toast('необхідно ввести текст для пошуку зображень');

function App() {

const [photos, setPhotos] = useState([]);

useEffect (() => {
axios.get('https://api.unsplash.com/photos/?;client_id=nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs')
.then((response)=> setPhotos(response.data))
}, [])
console.log(photos);
  return (
    <>
      <SearchBar notify={notify}/>
      <ImageGallery photos ={photos}/>
      <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
    </>
  )
}

export default App
