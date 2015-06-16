var Dancer = function(top, left, timeBetweenSteps, dancerClass) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="' + dancerClass + '"></span>')
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function() {
  // debugger;
  // console.log(this.timeBetweenSteps)
  var that = this;
  setTimeout(this.step.bind(that), this.timeBetweenSteps);

}

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
}


