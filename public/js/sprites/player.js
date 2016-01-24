(function(){

//private static variables
var ANIMATIONS = {
  IDLE : {
    name : 'idle',
    frames: [ 0, 1, 2, 3],
    fps : 5
  }
};

var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

function select_sprite_row(player_id){
    return function(frame_id){
      return frame_id + player_id*ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

//sprite class constructor
ToeFu.Player = function(game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name : 'Player ' + (id+1);
  this.facing; // direction that player is facing

  //super constructor call
  Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

  //set registration point
  this.anchor = { x : 0.5, y : 0.5 };

  //set animations

  this.animations.add( ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

  //play the inittial animation
  this.animations.play( ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
};

ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value : ToeFu.Player
  }
});

//public static variable
ToeFu.Player.FACING = {
  LEFT : 'LEFT',
  RIGHT : 'RIGHT'
};

//update is invoked on every frame
ToeFu.Player.prototype.update = function(){
  //update facing
  this.scale.x = FACING_FACTOR[ this.facing ];
};

// player movement
ToeFu.Player.prototype.jump = function(){

};

ToeFu.Player.prototype.dive = function(){

};

ToeFu.Player.prototype.dive_stop = function(){

};

ToeFu.Player.prototype.step_left = function(){
  console.log('stepping left');
};

ToeFu.Player.prototype.step_right = function(){
  console.log('stepping right');
};

ToeFu.Player.prototype.stop = function(){

};

// ToeFu.Player.prototype.continue = function(){

// };

})();
