var path     = require('path');
var sassTrue = require('sass-true');

// var sassFile = path.join(__dirname, 'test.scss');
// sassTrue.runSass({file: sassFile}, describe, it);

var sassFile = path.join(__dirname, 'functions/_color.scss');
sassTrue.runSass({file: sassFile}, describe, it);
