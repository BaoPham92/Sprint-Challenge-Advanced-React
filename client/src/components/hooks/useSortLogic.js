import { useState } from 'react';

export const useSortLogic = (roster) => {

    // * STATE
    const [data, setData] = useState(roster);

    // * SORT DATA
    const updateData = (type) => {

        if (type === 'names') {
            const names = [];
            roster.filter(player => !!player.name === true && names.push(player.name) )
            return setData(names.sort());
        }

        if (type === 'country') {
            const countries = [];
            roster.filter(player => !!player.country === true && countries.push(player) )
            return setData(countries.sort());
        }
    }
    // ! LOG DATA   
    // console.log(`LOGGING DATA`, data, roster)


    return [data, updateData]
}