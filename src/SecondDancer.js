var SecondDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'seconddancer');
  this.topp = top;
  this.leftt = left;
}

SecondDancer.prototype = Object.create(Dancer.prototype);
SecondDancer.prototype.constructor = SecondDancer;

SecondDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)

  for (var i = 0; i < window.dancers.length; i++){
    var dist = Math.sqrt(Math.pow(this.topp-dancers[i].topp,2) + Math.pow(this.leftt - dancers[i].leftt, 2));
    if ((dist > 0) && (dist < 75)){
      this.$node.toggle('explode').fadeOut(1000).toggle(1000)  
    }
  }
}

SecondDancer.prototype.lineUp = function() {
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof SecondDancer){
      dancers[i].setPosition(top, 100);
    }
  }
};