import axios from 'axios';
import {BASE_URL} from './ServiceConstants';

axios.defaults.baseURL = BASE_URL; // Setting up Base Url

//Your Services
export const loginService = data => {
  return axios.post('your login api url', data);
};

//Write your Services below like above Service
