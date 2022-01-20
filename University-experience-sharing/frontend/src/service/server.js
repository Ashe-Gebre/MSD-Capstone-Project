import axios from 'axios';

const apiGetwayUrl = 'https://6gtlgntt8l.execute-api.us-east-1.amazonaws.com/v1/student-posts'



export const fetchStudentPosts = () => axios.get(apiGetwayUrl);

export const createStudentPost = (newPost) => axios.post(apiGetwayUrl, newPost , {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});


export const updateStudentPost = (id, updatedPost) => axios.put(`${apiGetwayUrl}/${id}`, updatedPost);

export const deleteStudentPost = (id) => axios.delete(`${apiGetwayUrl}/${id}`);

export const  likeStudentPost = (id) => axios.patch(`${apiGetwayUrl}/${id}/like`);





// const myUrl = 'http://localhost:3000';
// const API = axios.create({ baseURL: myUrl });


// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
//   });


// export const createStudentPost = (newStudentPost) => API.post('/student-posts', newStudentPost);
// export const fetchStudentPosts = () => API.get('/student-posts');
// export const fetchStudentPost = () => API.get('/student-posts');
// export const updateStudentPost = (id, updatedStudentPost) => API.patch(`student-posts/${id}`, updatedStudentPost);

// export const likeStudentPost = (id) => API.patch(`student-posts/${id}/likeStudentPost`);
// export const deleteStudentPost = (id) => API.delete(`student-posts/${id}`);

// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
// // export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);