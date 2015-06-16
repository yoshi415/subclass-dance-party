var SecondDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'seconddancer');
  this.topp = top;
  this.leftt = left;
}

SecondDancer.prototype = Object.create(Dancer.prototype);
SecondDancer.prototype.constructor = SecondDancer;
SecondDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)
  this.$node.toggle();
  
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i].top){
      console.log('top: ', window.dancers[i].topP)
      this.$node.animate({'width':10,
                          'height':10}, 400)
      this.$node.animate({'width':1,
                          'height':1}, 400)
      dancers[i].setPosition(top, 100);
    }
  }
    // this.$node.animate({
  //   border-radius: 50px;
  // })
}
SecondDancer.prototype.lineUp = function() {
  console.log('secondv')
  for (var i = 0; i < window.dancers.length; i++){
    if (window.dancers[i] instanceof SecondDancer){
      dancers[i].setPosition(top, 100);
    }
  }
};