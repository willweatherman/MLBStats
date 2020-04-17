import React, { Component } from 'react';
import HomeContainer from './components/Home.jsx';
import FormContainer from './components/Form.jsx';
import {getAllTeams} from "./api";
import {
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
    componentDidMount() {
        return getAllTeams()
    }
    render() {
        return (
            <div className = "App">
                <header className = "App-header">
                    <Switch>
                        <Route path="/CreateTeam">
                            <FormContainer/>
                        </Route>
                        <Route path="/">
                            <HomeContainer/>
                        </Route>
                    </Switch>
                </header>
            </div>
        );
    }

}
export default App;