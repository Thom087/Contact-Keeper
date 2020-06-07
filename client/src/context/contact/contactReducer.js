import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state, //spread operator current state
        contacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state, //spread operator current state
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state, //spread operator current state
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state, //spread operator current state
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state, //spread operator current state
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state, //spread operator current state
        current: null,
      };
    case CLEAR_CONTACTS:
      return {
        ...state, //spread operator current state
        contacts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case FILTER_CONTACTS:
      return {
        ...state, //spread operator current state
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state, //spread operator current state
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state, //spread operator current state
        error: action.payload,
      };
    default:
      return state;
  }
};
