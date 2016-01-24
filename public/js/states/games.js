// The Game State
// handles sprite creation and game logic

(function(){

  var INITIAL_POSITIONS = [
  // player 1
  {x: 100,y: 100},
  // player 2
  {x: 600,y: 100}
  ];

  // class constructors
  ToeFu.Game = function(){
    this.player_1;
    this.player_2;
  };

  ToeFu.Game.prototype.create = function() {
    this.player_1 = new ToeFu.Player( this.game, 0);
    this.game.add.existing(this.player_1);
    this.player_2 = new ToeFu.Player( this.game, 1);
    this.game.add.existing(this.player_2);

    // position players
    this.player_1.x = INITIAL_POSITIONS[0].x;
    this.player_1.y = INITIAL_POSITIONS[0].y;

    this.player_2.x = INITIAL_POSITIONS[1].x;
    this.player_2.y = INITIAL_POSITIONS[1].y;

    this.input = new ToeFu.GameInput(this);

  };

  ToeFu.Game.prototype.update = function() {
    if( this.player_1.x < this.player_2.x ) {
         this.player_1.facing = ToeFu.Player.FACING.RIGHT;
         this.player_2.facing = ToeFu.Player.FACING.LEFT;
       } else {
         this.player_1.facing = ToeFu.Player.FACING.LEFT;
         this.player_2.facing = ToeFu.Player.FACING.RIGHT;
       }
  };

  ToeFu.Game.prototype.shutdown = function() {
    // body...
  };

  ToeFu.Game.prototype.continue = function() {
    // body...
  };

})();