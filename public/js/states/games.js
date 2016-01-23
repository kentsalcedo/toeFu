// The Game State
// handles sprite creation and game logic

// class constructors
ToeFu.Game = function(){

};

ToeFu.Game.prototype.create = function() {
  this.player_1 = new ToeFu.Player( this.game, 0);
  this.game.add.existing(this.player_1);
};

ToeFu.Game.prototype.update = function() {
  // body...
};

ToeFu.Game.prototype.shutdown = function() {
  // body...
};