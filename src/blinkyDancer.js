var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'dancer');
  this.topp = top;
  this.leftt = left;
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)
  this.$node.toggle();
}

BlinkyDancer.prototype.lineUp = function() {
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof BlinkyDancer){
      dancers[i].setPosition(top,0);
    }
  }
}