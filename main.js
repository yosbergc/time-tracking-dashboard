const json = 'data.json';
const work = document.querySelector(".work");
const play = document.querySelector(".play");
const study = document.querySelector('.study');
const exercise = document.querySelector('.exercise');
const social = document.querySelector('.social');
const selfcare = document.querySelector('.self-care');
const dailyButton = document.querySelector('.daily');
const weeklyButton = document.querySelector('.weekly');
const monthlyButton = document.querySelector('.monthly');
let timeframe = 'daily';
let time = 'day';
dailyButton.addEventListener('click', dayData);
weeklyButton.addEventListener('click', weeklyData);
monthlyButton.addEventListener('click', monthlyData);
window.addEventListener('load', dataLoad);
async function dataLoad() {
    let data = await fetch(json)
    .then((res) => res.json()
    .then((data) => { return data}))
    console.log(data)
    let workData = data[0].timeframes[timeframe];
    let playData = data[1].timeframes[timeframe];
    let studyData = data[2].timeframes[timeframe];
    let exerciseData = data[3].timeframes[timeframe];
    let socialData = data[4].timeframes[timeframe];
    let selfCareData = data[5].timeframes[timeframe];
    updateElementData(work, workData);
    updateElementData(play, playData);
    updateElementData(study, studyData);
    updateElementData(exercise, exerciseData);
    updateElementData(social, socialData);
    updateElementData(selfcare, selfCareData);
}
function updateElementData(element, data) {
    element.childNodes[3].childNodes[1].childNodes[3].innerHTML = `${data.current} hrs`;
    element.childNodes[3].childNodes[3].childNodes[3].innerHTML = `Previous ${time} ${data.previous} hrs`;
}
function dayData() {
    timeframe = 'daily';
    time = 'day';
    dataLoad();
}
function weeklyData() {
    timeframe = 'weekly';
    time = 'week';
    dataLoad();
}
function monthlyData() {
    timeframe = 'monthly';
    time = 'month';
    dataLoad();
}