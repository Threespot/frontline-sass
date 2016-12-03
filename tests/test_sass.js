var path     = require('path');
var sassTrue = require('sass-true');

// Files to test
// ENHANCEMENT: glob files
var testFiles = [
  // Variables
  'variables/_fs-base-font-size.scss',
  'variables/_fs-breakpoints.scss',
  'variables/_fs-colors.scss',
  'variables/_fs-easings.scss',
  'variables/_fs-svg-icons.scss',
  'variables/_fs-zindex.scss',
  // Functions
  'functions/_color.scss',
  'functions/_em.scss'
  // Mixins
];

// Loop through each file name and run the test file.
testFiles.forEach(function(file) {
  var sassFile = path.join(__dirname, file);
  sassTrue.runSass({file: sassFile}, describe, it);
});
