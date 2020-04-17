import React, { Component } from 'react';
import HomeContainer from '../src/components/home.js';
import FormContainer from '../src/components/form.js';
import {
    Switch,
    Route
} from "react-router-dom";

class App extends Component {

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