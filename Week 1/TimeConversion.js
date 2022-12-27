// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s = '12:01:00PM'
// Return '12:01:00'.

// S = '12:01:00AM'
// Return '00:01:00'.

const timeConversion = ((timeString) => {
    const timeArray = []
    const hoursArray = []
    const minsArray = []
    const secondsArray = []


    for (i=0; i<timeString.length; i++ ) {
        timeArray.push(timeString[i])
    }
    // console.log(timeArray)
    hoursArray.push(timeArray[0])
    hoursArray.push(timeArray[1])
    // console.log(hoursArray)
    minsArray.push(timeArray[3])
    minsArray.push(timeArray[4])
    // console.log(minsArray
    secondsArray.push(timeArray[6])
    secondsArray.push(timeArray[7])
    // console.log(secondsArray)

    hoursString = (hoursArray[0] + hoursArray[1])

    if(timeArray[8] === 'P') {
        hoursArray[0] = '1'
        if(hoursString === '01') {
            hoursArray[1] = '3'
        }
        if(hoursString === '02') {
            hoursArray[1] = '4'
        }
        if(hoursString === '03') {
            hoursArray[1] = '5'
        }
        if(hoursString === '04') {
            hoursArray[1] = '6'
        }
        if(hoursString === '05') {
            hoursArray[1] = '7'
        }
        if(hoursString === '06') {
            hoursArray[1] = '8'
        }
        if(hoursString === '07') {
            hoursArray[1] = '9'
        }
        if(hoursString === '08') {
            hoursArray[0] = '2'
            hoursArray[1] = '0'
        }
        if(hoursString === '09') {
            hoursArray[0] = '2'
            hoursArray[1] = '1'
        }
        if(hoursString === '10') {
            hoursArray[0] = '2'
            hoursArray[1] = '2'
        }
        if(hoursString === '11') {
            hoursArray[0] = '2'
            hoursArray[1] = '3'
        }
    }
    else if (timeArray[8] === 'A' && hoursString === '12') {
        hoursArray[0] = '0'
        hoursArray[1] = '0'
    }

    const convertedTime = hoursArray[0] + hoursArray[1] + ":" + minsArray[0] + minsArray[1] + ":" + secondsArray[0] + secondsArray[1]
    console.log(convertedTime)
    return (convertedTime)
})

timeConversion('12:01:00AM')
timeConversion('01:01:00AM')
timeConversion('02:01:00AM')
timeConversion('03:01:00AM')
timeConversion('04:01:00AM')
timeConversion('05:01:00AM')
timeConversion('06:01:00AM')
timeConversion('07:01:00AM')
timeConversion('08:01:00AM')
timeConversion('09:01:00AM')
timeConversion('10:01:00AM')
timeConversion('11:01:00AM')
timeConversion('12:01:00PM')
timeConversion('01:01:00PM')
timeConversion('02:01:00PM')
timeConversion('03:01:00PM')
timeConversion('04:01:00PM')
timeConversion('05:01:00PM')
timeConversion('06:01:00PM')
timeConversion('07:01:00PM')
timeConversion('08:01:00PM')
timeConversion('09:01:00PM')
timeConversion('10:01:00PM')
timeConversion('11:01:00PM')

