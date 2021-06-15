const ligthBlue = document.getElementById('ligthBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');
const LAST_LEVEL = 5;

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    setTimeout(this.nextLevel, 500);
  }

  initialize() {
    this.initialize = this.initialize.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.toggleBtnStart();
    this.level = 1;
    this.colors = {
      ligthBlue,
      violet,
      orange,
      green,
    };
  }

  toggleBtnStart() {
    if (btnStart.classList.contains('hide')) {
      btnStart.classList.remove('hide');
    } else {
      btnStart.classList.add('hide');
    }
  }

  generateSequence() {
    this.sequence = new Array(LAST_LEVEL)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.subLevel = 0;
    this.nameAttribute = 'value';
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
        return 'orange';
      case 3:
        return 'green';
    }
  }

  convertColorToNumber(nameColor) {
    switch (nameColor) {
      case 'ligthBlue':
        return 0;
      case 'violet':
        return 1;
      case 'orange':
        return 2;
      case 'green':
        return 3;
    }
  }

  iluminateSequence() {
    for (var i = 0; i < this.level; i++) {
      let color = this.convertNumberToColor(this.sequence[i]);
      setTimeout(() => this.iluminateColor(color), i * 2000);
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

  deleteEventsClick() {
    this.colors.ligthBlue.removeEventListener('click', this.chooseColor);
    this.colors.green.removeEventListener('click', this.chooseColor);
    this.colors.violet.removeEventListener('click', this.chooseColor);
    this.colors.orange.removeEventListener('click', this.chooseColor);
  }

  chooseColor(ev) {
    const nameColor = ev.target.dataset.color;
    const numberColor = this.convertColorToNumber(nameColor);

    this.iluminateColor(nameColor);
    if (numberColor === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.deleteEventsClick();
        if (this.level === LAST_LEVEL + 1) {
          this.gameWin();
        } else {
          setTimeout(this.nextLevel, 1500);
        }
      }
    } else {
      this.gameLost();
    }
  }

  gameWin() {
    swal
      .fire('Game say: ', 'Congratulations, you win the game', 'success')
      .then(this.initialize);
  }

  gameLost() {
    swal.fire('Game say: ', 'Sorry, you lost the game :(', 'error').then(() => {
      this.deleteEventsClick();
      this.initialize();
    });
  }
}

function startGame() {
  //var game = new Game();
  window.game = new Game();
}
