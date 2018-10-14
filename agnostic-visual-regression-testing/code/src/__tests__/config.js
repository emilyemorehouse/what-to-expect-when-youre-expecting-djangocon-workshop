module.exports = {
  baseUrl: 'http://127.0.0.1:8000',
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
  // All screensizes to track
  screenSizes: {
    desktop: [[1024, 768], [1366, 768]],
    mobile: [[320, 568], [375, 667], [1024, 1366]],
    mobile_device: ['iPhone 6', 'Galaxy S III'],
    tablet_device: ['iPad'],
  },
}
