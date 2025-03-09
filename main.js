let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    return this.step;
  }
};

console.log(ladder.up().up().down().showStep());
