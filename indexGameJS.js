const ligthBlue = document.getElementById('ligthBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
  }

  initialize() {
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
}

function startGame() {
  //var game = new Game();
  window.game = new Game();
}
