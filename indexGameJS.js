const ligthBlue = document.getElementById('ligthBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    this.nextLevel();
  }

  initialize() {
    this.chooseColor = this.chooseColor.bind(this);
    btnStart.classList.add('hide');
    this.level = 1;
    this.colors = {
      ligthBlue,
      violet,
      orange,
      green,
    };
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.iluminateSequence();
    this.addEventClick();
  }

  convertNumberToColor(numberColor) {
    switch (numberColor) {
      case 0:
        return 'ligthBlue';
      case 1:
        return 'violet';
      case 2:
        return ' orange';
      case 3:
        return 'green';
    }
  }

  iluminateSequence() {
    for (var i = 0; i < this.level; i++) {
      let color = this.convertNumberToColor(this.sequence[i]);
      setTimeout(() => this.iluminateColor(color), i * 1000);
    }
  }

  iluminateColor(color) {
    this.colors[color].classList.add('light');
    setTimeout(() => this.turnOffColor(color), 500);
  }

  turnOffColor(color) {
    this.colors[color].classList.remove('light');
  }

  addEventClick() {
    this.colors.ligthBlue.addEventListener('click', this.chooseColor);
    this.colors.green.addEventListener('click', this.chooseColor);
    this.colors.violet.addEventListener('click', this.chooseColor);
    this.colors.orange.addEventListener('click', this.chooseColor);
  }

  chooseColor(ev) {
    console.log(this);
  }
}

function startGame() {
  //var game = new Game();
  window.game = new Game();
}
