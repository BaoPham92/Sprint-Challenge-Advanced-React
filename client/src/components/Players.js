import React, { useState, useEffect } from 'react';
import { useSort } from './hooks/useSort';

export const Players = ({ roster }) => {

    // * TRACK SORTING CHOICE
    const [type, setType] = useState('');
    const [results] = useSort(type, roster);

    useEffect(() => {
        // console.log(`LOGGING TYPE SELECTION: ${type}`)
        console.log(`LOGGING RESULTS:`, results, `COMPARED TOO`, roster, results)
    }, [type])

    // * MAKE SURE WE HAVE DATA
    if (!!roster === false) {
        return <span>Loading roster of players</span>
    }

    console.log(results)

    // * GRAB TYPE FROM BUTTONS & SET TYPE
    const toggleType = (e) => {
        const target = e.target.textContent.toLowerCase().trim();
        setType(target)

        console.log(`LOGGING ${target} FROM BUTTON CLICK`)
    }

    return (
        <div>
            <h2>PLAYERS COMPONENT</h2>

            <button onClick={(e) => toggleType(e)}>Names</button>
            <button onClick={(e) => toggleType(e)}>Country</button>

            <ul>
                {
                    results && results.length > 0 && results && type === 'names'
                    &&
                    // * IF NAMES IS SORTED, SHOW PLAYER WITH SORTED NAMES
                    results.map((item, key) => <li key={key}>{type}: {item}</li>)
                    || 
                    results && results.length > 0 && type === 'country'
                    &&
                    // * IF COUNTRY IS SORTED, SHOW PLAYER FROM SORTED COUNTRY
                    results.map((player, key) => <li key={key}>Player: {player.name}, from {player.country}</li>)
                    ||
                    // * IF ROSTER EXIST, RENDER LIST ELEMENTS WITH PLAYER NAMES AS A DEFAULT
                    roster.map((player, key) => <li key={key}>Player: {player.name}</li>)
                }
            </ul>
        </div>
    )
}