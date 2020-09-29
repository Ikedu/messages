import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from '../constants/ActionTypes'

const initialState = []

export default function messages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      // Call API here to add the message
      return [
        {
          id: state.reduce((maxId, message) => Math.max(message.id, maxId), -1) + 1,
          date: action.date,
          isPublic: action.isPublic,
          text: action.text
        },
        ...state,
      ]

    case DELETE_MESSAGE:
      // Call API here to delete the message
      return state.filter(message =>
        message.id !== action.id
      )

    default:
      return state
  }
}
