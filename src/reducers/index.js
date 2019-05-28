import { FETCH_SITES_REQUESTED, FETCH_SITES_SUCCESS, FETCH_BOOKS_FAILURE, SORT_BY } from "../action-creators";

const initialState = {
  sites: [],
  loading: false,
  error: null,
  sortBy: "Все работы"
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SITES_REQUESTED: {
      return {
        sites: [],
        loading: true,
        error: null,
        ...state
      }
    }
    case FETCH_SITES_SUCCESS: {
      return {
        sites: action.payload,
        loading: false,
        error: null,
        sortBy: "Все работы"
      }
    }
    case FETCH_BOOKS_FAILURE: {
      return {
        sites: [],
        loading: false,
        error: action.payload,
        ...state
      }
    }
    case SORT_BY: {
      return {
        ...state,
        sortBy: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default reducers;