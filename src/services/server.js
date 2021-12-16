import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export function getCategories(){
    return axios.get(`${BASE_URL}/categories`);
}

export function getSubjects(){
    return axios.get(`${BASE_URL}/subjects`);
}