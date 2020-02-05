import React from "react"
<<<<<<< HEAD
import { increment, decrement, addUser } from '../../../action/action'
import { connect } from 'react-redux'

const IndexPage = (props) => {
    console.log(props.user)
    return (
        <div>
            <p>Counter: {props.counts}</p>
            <button onClick={() => props.handleIncrement()}>Increment</button>
            <button onClick={() => props.addUsers('xxxx')}>Add User</button>
=======
import dog from "../../../core/images/logo.svg" 
const IndexPage = () => {
    return (
        <div>
            <img src={dog} />
>>>>>>> 1917771f8254d9ca0ae24e493463b559dfcae4f3
        </div>
    )
}

<<<<<<< HEAD
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
=======
export default IndexPage
>>>>>>> 1917771f8254d9ca0ae24e493463b559dfcae4f3
