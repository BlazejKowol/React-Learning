// selector
export const getSearch = state => state.search;

// action
const SEARCH_INPUT = 'app/search/SEARCH_INPUT';

//action creators
export const searchInput = payload => ({ type: SEARCH_INPUT, payload });
const searchReducer = (statePart = '', action) => {
    switch(action.type) {
      case SEARCH_INPUT:
        return action.payload
      default:
        return statePart;
    }
  }

  export default searchReducer;