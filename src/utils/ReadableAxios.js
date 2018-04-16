import Axios from 'axios';

export default Axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
  headers: {'Authorization': 'seems like this could be any string'}
});