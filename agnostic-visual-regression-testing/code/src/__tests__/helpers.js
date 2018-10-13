// TODO fix the import
// import { testDir, goldenDir, diffDir, diffOptions } from './config'
const diffDir = './src/__tests__/__diffs__'
const goldenDir = './src/__tests__/__golden__'
const testDir = './src/__tests__/__screenshots__'
const diffOptions = {
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
}

const puppeteer = require('puppeteer')
const fs = require('mz/fs')
const compareImages = require('resemblejs/compareImages')

async function takeScreenshot(dir, page, route) {
  const fileName = `${route || 'index'}`

  await page.goto(`http://localhost:8888/${route}`)
  await page.screenshot({
    path: `${dir}/${fileName}.png`,
    fullPage: true,
  })
  return fileName
}

async function generateGoldenScreenshots() {
  let browser = null
  let page = null

  // Create directories if we don't already have them
  if (!fs.existsSync(goldenDir)) fs.mkdirSync(goldenDir)

  // Set up our environment
  browser = await puppeteer.launch()
  page = await browser.newPage()

  // Generate our desired screen sizes
  page.setViewport({ width: 800, height: 600 })
  await takeScreenshot(goldenDir, page, '')
  // Clean up and close out
  browser.close()
  return
}

async function processScreenshot(fileName) {
  const data = await compareImages(
    await fs.readFile(`${testDir}/${fileName}.png`),
    await fs.readFile(`${goldenDir}/${fileName}.png`),
    diffOptions,
  )
  await fs.writeFile(`${diffDir}/${fileName}.png`, data.getBuffer())
  return expect(data.misMatchPercentage).toBe('0.00')
}

async function takeAndCompareScreenshot(page, route) {
  const fileName = await takeScreenshot(testDir, page, route)
  return processScreenshot(fileName)
}

module.exports = {
  generateGoldenScreenshots,
  processScreenshot,
  takeAndCompareScreenshot,
}
