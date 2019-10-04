import React, { Component } from 'react';
import axios from 'axios';

// * COMPONENT IMPORTS HERE
import { Players } from './Players';

export default class Display extends Component {

    // * STATE
    state = {
        roster: []
    }

    // * LOGIC FOR WHEN COMPONENT MOUNTS
    componentWillMount() {
        // ? FETCH AND SET PLAYER DATA
        axios.get('http://localhost:5000/api/players')
            .then(res => this.setState({ roster: [...res.data] }))
    }

    render() {
        return (
            <div>
                <h1>DISPLAY COMPONENT</h1>

                {/* // * IF ROSTER EXIST, RENDER PLAYERS WITH ROSTER
                */}

                {
                    this.state.roster && <Players roster={this.state.roster} />
                }
            </div>
        )
    }
}