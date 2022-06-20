// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. 
// Такой таймер может использоваться в блогах и интернет-магазинах, 
// страницах регистрации событий, во время технического обслуживания и т. д.

// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      console.log(selectedDates[0].getTime());
      if (selectedDates[0].getTime() > options.defaultDate.getTime()) {Notiflix.Notify.warning("Please choose a date in the future");}
    },
  };
 
const startBtnRef = document.querySelector('button[data-start]');

const inputRef = document.querySelector('input[type="text"]');

flatpickr(inputRef, options);

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