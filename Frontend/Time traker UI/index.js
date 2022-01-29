var activity_rec = document.querySelectorAll('.container .user .activity-rec p');
var current_active = document.querySelector('.container .user .activity-rec p.active');
var work_box_current = document.querySelector('.activity .activity-info .activity-box.box-1 .time-tracker .time h1')
var work_box_prev = document.querySelector('.activity .activity-info .activity-box.box-1 .time-tracker .time p')
var play_box_current = document.querySelector('.activity .activity-info .activity-box.box-2 .time-tracker .time h1')
var play_box_prev = document.querySelector('.activity .activity-info .activity-box.box-2 .time-tracker .time p')
var study_box_current = document.querySelector('.activity .activity-info .activity-box.box-3 .time-tracker .time h1')
var study_box_prev = document.querySelector('.activity .activity-info .activity-box.box-3 .time-tracker .time p')
var exercise_box_current = document.querySelector('.activity .activity-info .activity-box.box-4 .time-tracker .time h1')
var exercise_box_prev = document.querySelector('.activity .activity-info .activity-box.box-4 .time-tracker .time p')
var social_box_current = document.querySelector('.activity .activity-info .activity-box.box-5 .time-tracker .time h1')
var social_box_prev = document.querySelector('.activity .activity-info .activity-box.box-5 .time-tracker .time p')
var self_care_box_current = document.querySelector('.activity .activity-info .activity-box.box-6 .time-tracker .time h1')
var self_care_box_prev = document.querySelector('.activity .activity-info .activity-box.box-6 .time-tracker .time p')
// console.log(work_box_current);
activity_rec.forEach(element => {
    element.addEventListener('click', e => {
        current_active.classList.remove('active');
        e.target.classList.add('active');
        current_active = e.target;
        loadData();
    })
})


async function loadData() {
    const response = await fetch('data.json');
    const data = await response.json();

    data.forEach(({ title, timeframes: { daily, weekly, monthly } }) => {
        if (title === 'Work') {

            if (current_active.innerText === 'Daily') {
                work_box_current.innerText = daily.current + 'Hrs';
                work_box_prev.innerText = 'Yesterday - ' + daily.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Weekly') {
                work_box_current.innerText = weekly.current + 'Hrs';
                work_box_prev.innerText = 'Last week - ' + weekly.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Monthly') {
                work_box_current.innerText = monthly.current + 'Hrs';
                work_box_prev.innerText = 'Last month - ' + monthly.previous + 'Hrs';
            }
        }
        else if (title === 'Play') {


            if (current_active.innerText === 'Daily') {
                play_box_current.innerText = daily.current + 'Hrs';
                play_box_prev.innerText = 'Yesterday - ' + daily.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Weekly') {
                play_box_current.innerText = weekly.current + 'Hrs';
                play_box_prev.innerText = 'Last week - ' + weekly.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Monthly') {
                play_box_current.innerText = monthly.current + 'Hrs';
                play_box_prev.innerText = 'Last month - ' + monthly.previous + 'Hrs';
            }
        }
        else if (title === 'Study') {



            if (current_active.innerText === 'Daily') {
                study_box_current.innerText = daily.current + 'Hrs';
                study_box_prev.innerText = 'Yesterday - ' + daily.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Weekly') {
                study_box_current.innerText = weekly.current + 'Hrs';
                study_box_prev.innerText = 'Last week - ' + weekly.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Monthly') {
                study_box_current.innerText = monthly.current + 'Hrs';
                study_box_prev.innerText = 'Last month - ' + monthly.previous + 'Hrs';
            }
        }
        else if (title === 'Exercise') {


            if (current_active.innerText === 'Daily') {
                exercise_box_current.innerText = daily.current + 'Hrs';
                exercise_box_prev.innerText = 'Yesterday - ' + daily.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Weekly') {
                exercise_box_current.innerText = weekly.current + 'Hrs';
                exercise_box_prev.innerText = 'Last week - ' + weekly.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Monthly') {
                exercise_box_current.innerText = monthly.current + 'Hrs';
                exercise_box_prev.innerText = 'Last month - ' + monthly.previous + 'Hrs';
            }
        }
        else if (title === 'Social') {


            if (current_active.innerText === 'Daily') {
                social_box_current.innerText = daily.current + 'Hrs';
                social_box_prev.innerText = 'Yesterday - ' + daily.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Weekly') {
                social_box_current.innerText = weekly.current + 'Hrs';
                social_box_prev.innerText = 'Last week - ' + weekly.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Monthly') {
                social_box_current.innerText = monthly.current + 'Hrs';
                social_box_prev.innerText = 'Last month - ' + monthly.previous + 'Hrs';
            }
        }
        else if (title === 'Self Care') {


            if (current_active.innerText === 'Daily') {
                self_care_box_current.innerText = daily.current + 'Hrs';
                self_care_box_prev.innerText = 'Yesterday - ' + daily.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Weekly') {
                self_care_box_current.innerText = weekly.current + 'Hrs';
                self_care_box_prev.innerText = 'Last week - ' + weekly.previous + 'Hrs';
            }
            else if (current_active.innerText === 'Monthly') {
                self_care_box_current.innerText = monthly.current + 'Hrs';
                self_care_box_prev.innerText = 'Last month - ' + monthly.previous + 'Hrs';
            }
        }

    })

}

loadData();
