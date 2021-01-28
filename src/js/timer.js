import template from '../templates/template.hbs';

const inputObject = [
  { field: 'days' },
  { field: 'hours' },
  { field: 'mins' },
  { field: 'secs' },
];

const markup = template(inputObject);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  init() {
    this.setMarkup();

    setInterval(() => {
      const currentTime = new Date();
      const diffTime = this.targetDate - currentTime;

      if (diffTime <= 0) {
        return this.calculator(0);
      }

      const time = this.calculator(diffTime);

      this.countdown(time);
    }, 1000);
  }

  setMarkup() {
    const targetSelector = this.selector;
    const timerEl = document.querySelector(`${targetSelector}`);
    const targetDateEl = document.querySelector('.main__description');

    timerEl.insertAdjacentHTML('afterbegin', markup);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const dateToShow = this.targetDate.toLocaleString('en-US', options);
    targetDateEl.textContent = `Target date is ${dateToShow}`;
  }

  calculator(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  countdown({ days, hours, mins, secs }) {
    const refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
    refs.secs.nextElementSibling.textContent = '';
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.init();

/*
const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 1, 2022'),
});

timer2.init(); */
