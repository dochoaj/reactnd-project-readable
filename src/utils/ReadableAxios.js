import Axios from 'axios';

export default Axios.create({
  baseURL: "http://localhost",
  timeout: 5000,
  headers: {'Authorization': 'seems like this could be any string'}
});