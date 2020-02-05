const initialState = {
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADDUSER':
      return {
        ...state,
        users: [...state.users, action.data],
      }
    default:
      return state
  }
}
