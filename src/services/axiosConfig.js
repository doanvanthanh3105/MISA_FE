import axios from 'axios';

/* 
  config mặc định cho axios
  CreatedBy: ĐVThành 19/8/2021
*/
const applyConfig = () => {
  axios.defaults.baseURL = 'https://localhost:44393/api/';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
};

export default applyConfig;
