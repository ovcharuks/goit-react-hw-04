import axios from 'axios'
export const fetchPhotos = async (query) => {
const { data } = await axios.get(`https://api.unsplash.com/photos/?;client_id=nAqYtCF7l8JE6SJBDYVHGnZ2Qc3TJV6mXaOTUZQGnWs`);

return data;
}