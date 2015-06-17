var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'dancer');
  this.topp = top;
  this.leftt = left;
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)

  for (var i = 0; i < window.dancers.length; i++){
    var dist = Math.sqrt(Math.pow(this.topp-dancers[i].topp,2) + Math.pow(this.leftt - dancers[i].leftt, 2));
    if ((dist > 0) && (dist < 75)){
      this.$node.toggle('explode').fadeOut('slow')  
      this.$node.toggle('slow')
    }
  }
};

BlinkyDancer.prototype.lineUp = function() {
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof BlinkyDancer){
        dancers[i].setPosition(top,0);
    }
  }
};