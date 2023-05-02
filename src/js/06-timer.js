import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

const timer = {
  startTime: null,
  intervalId: null,
  isActive: false,
  diff: 0,

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.startTime = Date.now();
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  },

  stop() {
    if (!this.isActive) return;
    this.diff = Date.now() - this.startTime;
    this.isActive = false;
    clearInterval(this.intervalId);
  },

  tick() {
    const diff = Date.now() - this.startTime + this.diff;
    const date = this.getTimeComponents(diff);
    const result = `${date.hours}:${date.mins}:${date.secs}`;
    refs.clockface.textContent = result;
  },

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};
