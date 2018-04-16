import Axios from 'axios';

export default Axios.create({
  baseURL: "localhost",
  timeout: 5000,
  headers: {'Authorization': 'seems like this could be any string'}
});