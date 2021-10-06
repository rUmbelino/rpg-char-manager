import axiosApi from 'axios';

export const axios = axiosApi.create({
  baseURL: 'https://www.dnd5eapi.co/api',
});
