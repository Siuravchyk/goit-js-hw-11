import axios from 'axios';

const API_KEY = '39734080-cf3cdbef57a420f2eea4a7c0d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImgs(query, page) {
  const params = {
    key: API_KEY,
    q: query, 
    image_type: 'photo',
    orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 40,
      
  };

  try {
      const { data } = await axios(BASE_URL, { params });
      return data;
      
  } catch (error) {
    console.log(error);
  }
}