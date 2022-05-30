const months = [
    { shortName: "Jan", maxDays: 31},
    { shortName: "Feb", maxDays: 29},
    { shortName: "Mar", maxDays: 31},
    { shortName: "Apr", maxDays: 30},
    { shortName: "May", maxDays: 31},
    { shortName: "Jun", maxDays: 30},
    { shortName: "Jul", maxDays: 31},
    { shortName: "Aug", maxDays: 31},
    { shortName: "Sep", maxDays: 30},
    { shortName: "Oct", maxDays: 31},
    { shortName: "Nov", maxDays: 30},
    { shortName: "Dec", maxDays: 31}
];
const days = [
    { shortName: "Sun", fullName: "Sunday"},
    { shortName: "Mon",fullName: "Monday"},
    { shortName: "Tue", fullName: "Tuesday"},
    { shortName: "Wed", fullName: "Wednesday"},
    { shortName: "Thu", fullName: "Thursday"},
    { shortName: "Fri", fullName: "Friday"},
    { shortName: "Sat", fullName: "Saturday"}
];

export default {
    getShortName: i => months[i].shortName,
    getMaxDays: i => months[i].maxDays,
    getMonths: () => months,
    getShortDays: i=> days[i].shortName,
    getFullDays: i => days[i].fullName,
    getDays: () => days,
}