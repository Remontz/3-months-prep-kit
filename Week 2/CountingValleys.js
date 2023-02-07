const countingValleys = (steps, path) => {
    // look for u and d with if statements, if u/d then if sealvl is 0 && next is === u/d then ++ accordingly.

    let mtnCtr = 0
    let valCtr = 0
    let seaLvl = 0
    for (let x = 0; x < path.length; x++) {
        if (path[x] === 'D') {
            seaLvl--
            if ((seaLvl === -1)) {
                console.log('valley starts at index: ' + x)
                valCtr++
            }
        }
        if (path[x] === 'U') {
            seaLvl++
            if ((seaLvl === -1)) {
                mtnCtr++
            }
        }
    }
    return valCtr
}

console.log(countingValleys(10, ['D', 'U', 'D', 'D', 'D', 'U', 'U', 'D', 'U', 'U']))
// countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'])
// countingValleys(10, ['U', 'D', 'U', 'U', 'U', 'D', 'U', 'D', 'D', 'D'])

        // if (path[x] === 'U') {
        //     if ((seaLvl === 0) && (path[x + 1] === path[x])) {
        //         mtnCtr++
        //         console.log('starting Mtn')
        //     }
        //     seaLvl++
        //     console.log('step up: ' + seaLvl)
        // }
        // else if (path[x] === 'D') {
        //     if ((seaLvl === 0) && (path[x + 1] === path[x])) {
        //         valCtr++
        //         console.log('starting Val')
        //     }
        //     seaLvl = seaLvl - 1
        //     console.log('step down: ' + seaLvl)
        // }

        // console.log('Mountains: ' + mtnCtr + '---' + 'Valleys: ' + valCtr)