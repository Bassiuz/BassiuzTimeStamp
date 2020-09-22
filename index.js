module.exports.dateToBassiuzTime = (date) => {
    return getBassiuzTimestamp(date);
}
module.exports.now = () => {
    return getBassiuzTimestamp(new Date());
}

getBassiuzTimestamp = (date) => {
    const originTime = new Date('1992 Nov 21');
    originTime.setHours(20);
    originTime.setMinutes(10);
    originTime.setSeconds(10);
    return date.getTime() - originTime.getTime();
}