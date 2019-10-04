import React from 'react';

export const Players = ({ roster }) => {

    // * MAKE SURE WE HAVE DATA
    if (!!roster === false) {
        return <span>Loading roster of players</span>
    }

    return (
        <div>
            <h2>PLAYERS COMPONENT</h2>
            <ul>
            {/* // * IF ROSTER EXIST, RENDER LIST ELEMENTS WITH PLAYER NAMES 
            */}
                {
                    roster && roster.map((player, key) => {
                        return <li key={key}>{player.name}</li>
                    })
                }
            </ul>
        </div>
    )
}