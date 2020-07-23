import createDataContext from './createDataContext';
import grocerApi from '../api/grocersApi';
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from '../nav/RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { errorMessage: action.payload, token: null };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    RootNavigation.navigate('Homepage', { screen: 'Browse' });
  } else {
    RootNavigation.navigate('SignUp');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await grocerApi.post('/auth/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      RootNavigation.navigate('Homepage', { screen: 'Browse' });
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign-up' });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await grocerApi.post('/auth/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      RootNavigation.navigate('Homepage', { screen: 'Browse' });
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign-in' });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    RootNavigation.navigate('SignIn');
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '' }
);
