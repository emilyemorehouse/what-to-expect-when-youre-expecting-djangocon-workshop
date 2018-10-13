module.exports = {
  // Directories for storing all of our image types
  diffDir: './src/__tests__/__diffs__',
  goldenDir: './src/__tests__/__golden__',
  testDir: './src/__tests__/__screenshots__',
  // Settings for image diffing
  diffOptions: {
    output: {
      errorColor: { red: 255, green: 0, blue: 255 },
      errorType: 'movement',
      transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true,
    },
    scaleToSameSize: true,
    ignore: 'antialiasing',
  },
}
