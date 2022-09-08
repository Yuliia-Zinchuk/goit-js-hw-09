// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const spanDays = document.querySelector('.value[data-days]');
const spanHours = document.querySelector('.value[data-hours]');
const spanMinutes = document.querySelector('.value[data-minutes]');
const spanSeconds = document.querySelector('.value[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');

btnStart.setAttribute('disabled', true);

btnStart.addEventListener('click', onBtnStart);

let selectDate = 0;
flatpickr('#datetime-picker ', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = selectedDates[0];

    if (selectedDates[0] <= new Date()) {
      btnStart.setAttribute('disabled', true);
      alert('I love async JS!');
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
});

function onBtnStart() {
  btnStart.setAttribute('disabled', true);
  input.setAttribute('disabled', true);
  setInterval(() => {
    const timeLeft = selectDate - new Date();

    if (timeLeft <= 0) {
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    spanDays.textContent = pad(days);
    spanHours.textContent = pad(hours);
    spanMinutes.textContent = pad(minutes);
    spanSeconds.textContent = pad(seconds);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
//addLeadingZero(value);

// const timer = {
//   start() {
//     const startTime = Date.now();
//     //const teamMeetingDate = new Date(inputPicker.value);
//     console.log(teamMeetingDate.getTime());
//     const futureMs = teamMeetingDate.getTime();
//     console.log(futureMs);
//     //  console.log(inputPicker.value);
//     setInterval(() => {
//       const currentTime = Date.now();
//       console.log(currentTime);

//       const Result = futureMs - currentTime;
//       // console.log(convertMs(Result));
//       const { days, hours, minutes, seconds } = convertMs(Result);
//       //console.log(` ${days}:${hours}:${minutes}:${seconds}`);
//       //   spanValue.value = `${hours} ${days}`;
//       //   spanDays.textContent = pad(days);
//       //   spanHours.textContent = pad(hours);
//       //   spanMinutes.textContent = pad(minutes);
//       //   spanSeconds.textContent = pad(seconds);
//     }, 1000);
//   },
// };

// timer.start();

//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
