var ThirdDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'thirddancer');
  this.topp = top;
  this.leftt = left;
}

ThirdDancer.prototype = Object.create(Dancer.prototype);
ThirdDancer.prototype.constructor = ThirdDancer;

ThirdDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)

  for (var i = 0; i < window.dancers.length; i++){
    var dist = Math.sqrt(Math.pow(this.topp-dancers[i].topp,2) + Math.pow(this.leftt - dancers[i].leftt, 2));

    if ((dist > 0) && (dist < 60)){
      this.$node.toggle('explode').fadeOut(2000);  
      this.$node.toggle('bounce', {times: 3}, 2000);
    }
  }
};

ThirdDancer.prototype.lineUp = function() {
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof ThirdDancer){
      dancers[i].setPosition(top,200);
    }
  }
};