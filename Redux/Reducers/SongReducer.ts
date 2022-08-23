import songActions from '../Actions/songActions'
const InitialState = {
  activeSongs: [],
  activesong: null,
}

const SongReducer = (state = InitialState, action) => {
  switch (action.type) {
    case songActions.CHANGE_ACTIVE_SONG:
      return {
        ...state,
        activesong: action.payload,
      }
    case songActions.CHANGE_ACTIVE_SONGS:
      return {
        ...state,
        activeSongs: action.payload,
      }
    default:
      return state
  }
}

export default SongReducer
