import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, search}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards:[...state.cards, {...action.payload, id: shortid()}] }
    case 'SEARCH_INPUT':
      return {...state, search: action.payload }
    default: 
      return state;
  } 
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;