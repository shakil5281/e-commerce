const PRODUCTS_FETCH_REQUESTED = 'products/fetchRequested';
const PRODUCTS_FETCH_SUCCEEDED = 'products/fetchSucceeded';
const PRODUCTS_FETCH_FAILED = 'products/fetchFailed';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const productsSlice = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCTS_FETCH_SUCCEEDED:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case PRODUCTS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // add other product-related cases here
    default:
      return state;
  }
};

const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_FETCH_REQUESTED });
    const response = await fetch('https://example.com/api/products');
    const products = await response.json();
    dispatch({ type: PRODUCTS_FETCH_SUCCEEDED, payload: products });
  } catch (error) {
    dispatch({ type: PRODUCTS_FETCH_FAILED, payload: error.message });
  }
};

export { productsSlice, fetchProducts };
