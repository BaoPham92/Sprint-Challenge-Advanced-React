import { useEffect } from 'react';

import { useSortLogic } from './useSortLogic';

export const useSort = (type, roster) => {

    const [updatedRoster, setUpdatedRoster] = useSortLogic(roster)

    useEffect(() => {
        setUpdatedRoster(type)
        
        // ! LOG DATA
        // console.log(`LOGGING UPDATED ROSTER`, updatedRoster)
    }, [type])

    // ! LOG DATA
    // console.log(updatedRoster)

    return [updatedRoster]
}