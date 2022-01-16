import axios from 'axios';

const myUrl = 'http://localhost:3000';
const API = axios.create({ baseURL: myUrl });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const createStudentPost = (newStudentPost) => API.post('/student-posts', newStudentPost);
export const fetchStudentPosts = () => API.get('/student-posts');
export const updateStudentPost = (id, updatedStudentPost) => API.patch(`student-posts/${id}`, updatedStudentPost);

export const likeStudentPost = (id) => API.patch(`student-posts/${id}/likeStudentPost`);
export const deleteStudentPost = (id) => API.delete(`student-posts/${id}`);

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);