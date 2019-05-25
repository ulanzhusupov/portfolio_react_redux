import { FETCH_SITES_REQUESTED, FETCH_SITES_SUCCESS, FETCH_BOOKS_FAILURE } from "../action-creators";

const initialState = {
  sites: [],
  loading: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SITES_REQUESTED: {
      return {
        sites: [],
        loading: true,
        error: null
      }
    }
    case FETCH_SITES_SUCCESS: {
      return {
        sites: action.payload,
        loading: true,
        error: null
      }
    }
    case FETCH_BOOKS_FAILURE: {
      return {
        sites: [],
        loading: true,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default reducers;