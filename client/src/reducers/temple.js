import {
  GET_TEMPLES,
  GET_TEMPLE,
  TEMPLE_ERROR,
  UPDATE_LIKES,
  UPDATE_LYKES,
  ADD_COMMENT
} from '../actions/types';

const initialState = {
  temples: [],
  temple: [],
  loading: true,
  error: {}
}

export default function foo(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case GET_TEMPLES:
      return {
        ...state,
        temples: payload,
        loading: false
      }
    case GET_TEMPLE:
      return {
        ...state,
        temple: payload,
        loading: false
      }
    case TEMPLE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case UPDATE_LIKES:
      return {
        ...state,
        temple: state.temple.map(temple => temple._id === payload.id ? {...temple, likes: payload.likes} : temple),
        loading: false
      }
    case UPDATE_LYKES:
      return {
        ...state,
        temple: state.temple.map(temple => temple._id === payload.id ? {...temple, likes: payload.likes} : temple),
        loading: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        temple: {...state.temple, comments: payload},
        loading: false
      }
    default:
      return state;
  }
}
