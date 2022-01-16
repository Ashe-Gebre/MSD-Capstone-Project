import { AUTH } from '../constants/actionTypes';
import * as service from '../service/server';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await service.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await service.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};