(function(){

  var ANIMATIONS = {
    IDLE: {
      name : 'idle',
      frames : [0,1,2,3],
      fps  :5
    }
  };

  ToeFu.Player = function (game,id,name){
    this.game = game;
    this.id  = id;
    this.name = name? name : 'Player ' + (id+1);

    // super contructor call
    Phaser.Sprite.call(this,game,0,0,ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

  // set animation
  this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);

  // play the initial animation
  this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);

  };

  // extend prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    contructor: {
      value : ToeFu.Player
    }
  });
})();
