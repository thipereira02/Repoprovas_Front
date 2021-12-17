import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export function getCategories(){
    return axios.get(`${BASE_URL}/categories`);
}

export function getSubjects(){
    return axios.get(`${BASE_URL}/subjects`);
}

export function getTeacherBySubject(id){
    return axios.get(`${BASE_URL}/teachers/${id}`);
}

export function sendTest(body){
    return axios.post(`${BASE_URL}/tests`, body);
}