import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer 4330ebfabc654a6992c2aa792f3173a3';

const fetchArticles = ({ searchQuery = '', page = 1, pageSize = 5 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${page}`,
    )
    .then(response => response.data.articles);
};
export default { fetchArticles };
