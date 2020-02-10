
const initialState = {
  moviedescription: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHMOVIE':
      return {
        ...state,
        moviedescription: action.payload,
      }
    default:
      return state
  }
}
