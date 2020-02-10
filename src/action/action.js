import axios from 'axios'

export const increment = () => {
  return {
    type: "INCREMENT"
  }
}

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const addUser = (datas) => {
  return {
    type: "ADDUSER",
    data: datas
  }
}

export const searchMovieByName = datas => dispatch => {
  axios.get(`http://omdbapi.com/?apikey=a1b8396c&t=${datas}`).then((data) => {
    
    dispatch({
      type: "SEARCHMOVIE",
      payload: data.data
    })
  })
}