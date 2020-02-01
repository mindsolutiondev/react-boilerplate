import React from "react"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import App from '../components/pages/IndexPage'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
)

export default Routes