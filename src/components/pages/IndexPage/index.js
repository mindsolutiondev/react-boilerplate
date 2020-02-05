import React from "react"
import { increment, decrement, addUser } from '../../../action/action'
import { connect } from 'react-redux'

const IndexPage = (props) => {
    console.log(props.user)
    return (
        <div>
            <p>Counter: {props.counts}</p>
            <button onClick={() => props.handleIncrement()}>Increment</button>
            <button onClick={() => props.addUsers('xxxx')}>Add User</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counts: state.counters.count,
        user: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: () => {
        return dispatch(increment())
    },
    handleDecrement: () => dispatch(decrement()),
    addUsers: (name) => {
        return dispatch(addUser(name))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
