import { FETCH_SITES_REQUESTED, FETCH_SITES_SUCCESS, FETCH_BOOKS_FAILURE, SORT_BY } from "../action-creators";


const sitesRequested = () => {
  return {
    type: FETCH_SITES_REQUESTED
  }
};

const sitesLoaded = (newSites) => {
  return {
    type: FETCH_SITES_SUCCESS,
    payload: newSites
  }
};

const sitesError = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }
};

const sortBy = (category) => {
  return {
    type: SORT_BY,
    payload: category
  }
};


export {
  sitesRequested,
  sitesLoaded,
  sitesError,
  sortBy
};