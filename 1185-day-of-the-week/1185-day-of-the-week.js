/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    function isLeap(y) {
        return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
    }
    let totalDays = 0;
    for (let y = 1971; y < year; y++) {
        totalDays += isLeap(y) ? 366 : 365;
    }
    for (let m = 1; m < month; m++) {
        totalDays += monthDays[m - 1];
        if (m === 2 && isLeap(year)) {
            totalDays += 1;
        }
    }
    totalDays += day - 1;
    return days[(totalDays + 5) % 7];
};
