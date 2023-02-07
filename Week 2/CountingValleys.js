const countingValleys = (steps, path) => {
    let mtnCtr = 0
    let valCtr = 0
    let seaLvl = 0
    for (let x = 0; x < steps; x++) {
        if (path[x] === 'U') {
            seaLvl++
        }
        else { seaLvl-- } // look for u and d with if statements, if u/d then if sealvl is 0 && next is === u/d then ++ accordingly.
        ((path[x] === path[x + 1]) && path[x] !== path[x - 1]) ? (path[x] === 'D' ? valCtr++ : mtnCtr++) : null
    }

    console.log('Mountains: ' + mtnCtr + '---' + 'Valleys: ' + valCtr)
}

countingValleys(8, ['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D'])
countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'])
countingValleys(10, ['U', 'D', 'U', 'U', 'U', 'D', 'U', 'D', 'D', 'D'])