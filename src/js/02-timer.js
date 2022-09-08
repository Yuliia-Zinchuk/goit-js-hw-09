import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');
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
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
});

function onBtnStart() {
  btnStart.setAttribute('disabled', true);
  input.setAttribute('disabled', true);

  setInterval(addTimer, 1000);
}

function addTimer() {
  const timeLeft = selectDate - new Date();
  if (timeLeft <= 0) {
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeLeft);

  spanDays.innerHTML = addLeadingZero(days);
  spanHours.innerHTML = addLeadingZero(hours);
  spanMinutes.innerHTML = addLeadingZero(minutes);
  spanSeconds.innerHTML = addLeadingZero(seconds);
}
function addLeadingZero(value) {
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
