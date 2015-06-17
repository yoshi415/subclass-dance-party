var Dancer = function(top, left, timeBetweenSteps, dancerClass) {
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="' + dancerClass + '"></span>')
  this.step();
  this.setPosition(top, left);
  var that = this;
  this.$node.on("mouseover", function() {
    that.$node.toggle('explode').fadeOut('slow') 
  })
};

Dancer.prototype.step = function() {
  var that = this;
  setTimeout(this.step.bind(that), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


