class Slider {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.indexInterval = 0;
    this.time = 5000;
  }
  nextSlide() {
    this.indexTimeout = setTimeout(() => {
      const activeSlide = document.querySelector(".active");
      if (activeSlide.nextElementSibling) {
        activeSlide.classList.remove("active");
        activeSlide.nextElementSibling.classList.add("active");
      } else {
        activeSlide.classList.remove("active");
        this.slides[0].classList.add("active");
      }
      this.nextSlide();
    }, this.time);
  }
}

class Timer {
  constructor() {
    this.timeContainer = document.querySelector(".timer");
    this.time = 13162300;
    this.index;
    this.timer = ["", "", ""];
  }
  createTime() {
    this.timer[0] = Math.floor(this.time / (1000 * 60 * 60));
    this.timer[1] = Math.floor(this.time / (1000 * 60) - this.timer[0] * 60);
    this.timer[2] = Math.floor(
      this.time / 1000 - (this.timer[1] * 60 + this.timer[0] * 60 * 60)
    );
    this.timer.forEach((item, i) => {
      if (item <= 9) {
        this.timer[i] = "0" + item;
      }
    });
  }

  showTime() {
    this.index = setTimeout(() => {
      this.time -= 1000;
      this.createTime();
      const time = this.timer.join(":");
      this.timeContainer.textContent = time;
      if (this.time > 1000) this.showTime();
    }, 1000);
  }
}

const slider = new Slider();
const timer = new Timer();
slider.nextSlide();
timer.showTime();
