var ThirdDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'thirddancer');
  this.topp = top;
  this.leftt = left;
}

ThirdDancer.prototype = Object.create(Dancer.prototype);
ThirdDancer.prototype.constructor = ThirdDancer;
ThirdDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)
  this.$node.fadeIn();
  this.$node.fadeOut();
}
ThirdDancer.prototype.lineUp = function(B) {
  console.log('thriud')
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof ThirdDancer){
      dancers[i].setPosition(top,200);
    }
  }
};