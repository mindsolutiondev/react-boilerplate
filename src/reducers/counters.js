const initialState = {
    count: 1,
    otherState: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}