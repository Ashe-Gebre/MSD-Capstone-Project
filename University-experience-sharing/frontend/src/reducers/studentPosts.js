/* eslint-disable import/no-anonymous-default-export */

import {
  GET_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

export default (studentPosts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case CREATE:
      return [...studentPosts, action.payload];
    case UPDATE:
      return studentPosts.map((item) =>
        item._id === action.payload._id ? action.payload : item
      ); 
    case DELETE:
      return studentPosts.filter((item) => item._id !== action.payload);
    case LIKE:
      return studentPosts.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    default:
      return studentPosts;
  }
};
