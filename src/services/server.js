import axios from 'axios';

const BASE_URL = 'https://back-repoprovasapp.herokuapp.com';

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

export function getTeachersList(){
    return axios.get(`${BASE_URL}/tests/teachers`);
}

export function getSubjectsList(){
    return axios.get(`${BASE_URL}/tests/subjects`);
}