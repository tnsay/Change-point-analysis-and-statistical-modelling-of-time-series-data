import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

export const fetchPrices = () => axios.get(`${BASE_URL}/prices`);
export const fetchChangePoint = () => axios.get(`${BASE_URL}/changepoint`);
