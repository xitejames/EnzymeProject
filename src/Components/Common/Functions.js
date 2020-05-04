import moment from 'moment'

export const getDate = (timestamp) => {
    let time = moment.unix(timestamp).toISOString().slice(11, -5);

    return time;
}

export const getUNIXDate = (timestamp) => {
    let time = moment.unix(timestamp)

    return time;
}

export const getDifferenceInTimestamps = (earlyTs, laterTs) => {
    const actualTs = laterTs - earlyTs
    return (new Date(actualTs).toISOString().slice(11, -5))
}

export const getTotalMinutes = (earlyTs, laterTs) => {
    const actualTs = laterTs - earlyTs

    const acctualMins = (actualTs / 1000 / 60 / 60)
    const actualTime = acctualMins
}

export const hashCode = (str) => { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

export const intToRGB = (i) => {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}
