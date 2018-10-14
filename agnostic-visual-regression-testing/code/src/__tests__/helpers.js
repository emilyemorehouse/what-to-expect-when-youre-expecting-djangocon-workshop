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
const screenSizes = {
  desktop: [[1024, 768], [1366, 768]],
  mobile: [[320, 568], [375, 667], [1024, 1366]],
  mobile_device: ['iPhone 6', 'Galaxy S III'],
  tablet_device: ['iPad'],
}
const baseUrl = 'http://127.0.0.1:8000'

const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')
const fs = require('mz/fs')
const compareImages = require('resemblejs/compareImages')

async function takeScreenshot(
  dir,
  browser,
  route,
  screenSize,
  screenshotSize,
  clickTarget,
) {
  const page = await browser.newPage()
  let fileName = null

  if (screenSize === 'mobile_device' || screenSize === 'tablet_device') {
    fileName = `${screenSize}/${screenshotSize}${route || 'index'}`

    await page.emulate(devices[screenshotSize])
  } else {
    fileName = `${screenSize}/${screenshotSize[0]}-x-${
      screenshotSize[1]
    }${route || 'index'}`

    await page.setViewport({
      width: screenshotSize[0],
      height: screenshotSize[1],
    })
  }

  // Sanitize our file name
  fileName = fileName.replace(' ', '')

  await page.goto(`${baseUrl}/${route}`)

  // Handle clicks, if specified
  if (clickTarget) {
    // Update our filename to track navigation
    fileName += `-to-${clickTarget}`

    // Automatically expand the menu on smaller devices
    if (screenSize === 'mobile_device' || screenshotSize[0] < 768) {
      await page.click('[data-toggle="collapse"]')
    }

    // Navigate by clicking on our target
    await page.click(clickTarget)
  }

  await page.screenshot({
    path: `${dir}/${fileName}.png`,
    fullPage: true,
  })
  return fileName
}

async function generateGoldenScreenshots() {
  let browser = null

  // Create directories if we don't already have them
  if (!fs.existsSync(goldenDir)) fs.mkdirSync(goldenDir)

  Object.keys(screenSizes).forEach(screenSize => {
    if (!fs.existsSync(`${goldenDir}/${screenSize}`))
      fs.mkdirSync(`${goldenDir}/${screenSize}`)
  })

  // Set up our environment
  browser = await puppeteer.launch()

  // Generate our desired screen sizes
  const screenShots = []
  Object.keys(screenSizes).forEach(screenshotType => {
    Object.keys(screenSizes[screenshotType]).forEach(screenSize => {
      const screenshotSize = screenSizes[screenshotType][screenSize]
      screenShots.push(
        takeScreenshot(goldenDir, browser, '', screenshotType, screenshotSize),
      )
      screenShots.push(
        takeScreenshot(
          goldenDir,
          browser,
          '',
          screenshotType,
          screenshotSize,
          '#about',
        ),
      )
    })
  })

  return Promise.all(screenShots).then(() => {
    // Clean up and close out
    browser.close()
  })
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

async function takeAndCompareScreenshot(
  browser,
  route,
  screenSize,
  screenshotSize,
  clickTarget,
) {
  const fileName = await takeScreenshot(
    testDir,
    browser,
    route,
    screenSize,
    screenshotSize,
    clickTarget,
  )
  return processScreenshot(fileName)
}

module.exports = {
  generateGoldenScreenshots,
  processScreenshot,
  takeAndCompareScreenshot,
}
