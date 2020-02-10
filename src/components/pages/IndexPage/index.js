import React, { useState } from 'react'
import {
  increment,
  decrement,
  addUser,
  searchMovieByName,
} from '../../../action/action'
import { connect } from 'react-redux'

const IndexPage = props => {
  const [ movie, setMovie ] = useState("")

  console.log(props.moviesdes)
  return (
    <div>
      {/* <p>Counter: {props.counts}</p>
            <button onClick={() => props.handleIncrement()}>Increment</button>
            <button onClick={() => props.addUsers('xxxx')}>Add User</button> */}
      <p>
        {' '}
        Search : <input type="text" onChange={(e) => setMovie(e.target.value)}/>
        <button onClick={() => props.searchMovie(movie)}>Search</button>
      </p>
            <img src={props.moviesdes.Poster} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counts: state.counters.count,
    user: state.users.users,
    moviesdes: state.movies.moviedescription
  }
}

const mapDispatchToProps = dispatch => ({
  handleIncrement: () => {
    return dispatch(increment())
  },
  handleDecrement: () => dispatch(decrement()),
  addUsers: name => {
    return dispatch(addUser(name))
  },
  searchMovie: name =>  {
    return dispatch(searchMovieByName(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
