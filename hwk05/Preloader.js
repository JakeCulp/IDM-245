gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");
    this.stage.backgroundColor = '#071112';
    // this.preloadBg = this.add.sprite(0, 0, 'startscreen');

    this.preloadBg = this.add.sprite((960 - 476) / 2, (720 - 144) / 2, 'preloaderBg');
    this.preloadBar = this.add.sprite((960 - 416) / 2, (720 - 70) / 2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    this.load.spritesheet('howtoplay', 'img/howtoplaybutton.png', 349, 71);
    this.load.image('spacebutton', 'img/spacebutton.png');
    this.load.image('startscreen', 'img/startscreen.png');

    // screens
    this.load.image('gamescreen', 'img/gamescreen.png');
    this.load.image('background', 'img/background.png');
    this.load.image('road', 'img/road.png');
    this.load.image('buildings', 'img/buildings.png');


    this.load.image('losescreen', 'img/losescreen.png');



    // Load temp buttons
    this.load.spritesheet('winButton', 'img/btn_win.png', 90, 90);
    this.load.spritesheet('loseButton', 'img/btn_lose.png', 90, 90);
    this.load.spritesheet('pointsButton', 'img/btn_points.png', 90, 90);


    // Load buttons
    this.load.spritesheet('startbutton', 'img/startbutton.png', 280, 71);
    this.load.spritesheet('playagainsprite', 'img/playagainsprite.png', 349, 71);
    this.load.image('losescreen', 'img/losescreen.png');
    this.load.spritesheet('exitbutton', 'img/exitbutton.png', 64, 64);
    this.load.image('character', 'img/character.png');
    this.load.image('character_win', 'img/character_win.png');
    this.load.image('character_lose', 'img/character_lose.png');

    // load items

    this.load.spritesheet('charger', 'img/charger.png',57,56);
    this.load.spritesheet('coffeecup', 'img/coffeecup.png',56,69);
    this.load.spritesheet('textbook', 'img/textbook.png',60,50);
    this.load.spritesheet('student', 'img/student.png',74, 191);
    this.load.spritesheet('professor', 'img/professor.png',87, 199 );
    this.load.spritesheet('car', 'img/car.png',285, 145);





    this.load.image('spacebutton', 'img/spacebutton.png');



  },
  create: function () {
      this.state.start('Main');
  }
};
