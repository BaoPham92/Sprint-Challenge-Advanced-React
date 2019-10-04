import React, { Component } from 'react';

// * COMPONENT IMPORTS HERE
import { Players } from './Players';

export default class Display extends Component {

    render() {

        return (
            <div>
                <h1>DISPLAY COMPONENT</h1>
                <Players />
            </div>
        )
    }
}