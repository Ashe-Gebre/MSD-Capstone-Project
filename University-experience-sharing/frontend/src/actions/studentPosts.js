/* eslint-disable no-restricted-globals */
import * as service from "../service/server";   //  from API...connections to backend using axios @Ashe

import {
 
  GET_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// redux-thunk helps do the async work here
export const getStudentPosts = () => async (dispatch) => {
  try {
    const { data } = await service.fetchStudentPosts();
 console.log(data);
    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStudentPost = (studentPost) => async (dispatch) => {
  try {
    const { data } = await service.createStudentPost(studentPost);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudentPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await service.updateStudentPost(id, post);
    window.location.reload()
    dispatch({ type: UPDATE, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const likeStudentPost = (id) => async (dispatch) => {
  try {
    const { data } = await service.likeStudentPost(id);
    window.location.reload()
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudentPost = (id) => async (dispatch) => {
  try {
    await service.deleteStudentPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};


// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//     try {
//       dispatch({ type: START_LOADING });
//       const { data: { data } } = await service.fetchPostsBySearch(searchQuery);
  
//       dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
//       dispatch({ type: END_LOADING });
//     } catch (error) {
//       console.log(error);
//     }
//   };