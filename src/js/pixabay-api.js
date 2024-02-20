import axios from 'axios';

export async function requests(usersRequests, pages) {
  const API_KEY = '10232217-e697c3d56777d20dc0cbe8fb5';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${usersRequests}&image_type=photo&orientation=horizontal&safesearch=true`;

  const params = {
    page: pages,
    per_page: 15,
  };

  const response = await axios.get(url, { params });
  return response.data;
}
