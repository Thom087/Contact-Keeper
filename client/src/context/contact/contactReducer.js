import {
  ADD_CONTACT,
  DELTE_CONTACT,
  SET_ALERT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state, //spread operator current state
        contacts: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
};
