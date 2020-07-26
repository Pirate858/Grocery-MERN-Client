import createDataContext from './createDataContext';
import grocerApi from '../api/grocersApi';

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'get_items':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const getItems = (dispatch) => {
  return async () => {
    try {
      const response = await grocerApi.get('/items');

      dispatch({ type: 'get_items', payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(itemReducer, { getItems }, { items: [] });
