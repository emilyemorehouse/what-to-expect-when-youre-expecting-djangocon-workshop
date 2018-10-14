import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import puppeteer from 'puppeteer'
import { testDir, goldenDir, diffDir, screenSizes } from './config'
import { takeAndCompareScreenshot } from './helpers'

// TODO: change these to import
const fs = require('mz/fs')

// Test configuration
configure({ adapter: new Adapter() })
jest.setTimeout(10000)

describe('dinosaurs are partying', () => {
  let browser = null

  beforeAll(async () => {
    if (!fs.existsSync(goldenDir)) {
      console.log("You don't have any golden screenshots!")
      // TODO: abort fully
      return
    }
    if (!fs.existsSync(testDir)) fs.mkdirSync(testDir)
    if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir)

    Object.keys(screenSizes).forEach(screenshotType => {
      if (!fs.existsSync(`${diffDir}/${screenshotType}`))
        fs.mkdirSync(`${diffDir}/${screenshotType}`)
      if (!fs.existsSync(`${testDir}/${screenshotType}`))
        fs.mkdirSync(`${testDir}/${screenshotType}`)
    })
  })

  beforeEach(async () => {
    browser = await puppeteer.launch()
  })

  afterEach(() => browser.close())

  // Generate tests for all screen sizes
  Object.keys(screenSizes).forEach(screenshotType => {
    Object.keys(screenSizes[screenshotType]).forEach(screenSize => {
      const screenshotSize = screenSizes[screenshotType][screenSize]
      let testName = null

      // Handle device types, which only specify the device name
      if (
        screenshotType === 'mobile_device' ||
        screenshotType === 'tablet_device'
      ) {
        testName = `${screenshotSize}`
      } else {
        // Handle generic viewports, which specify a height and width
        testName = `${screenshotType} - ${screenshotSize[0]} x ${
          screenshotSize[1]
        }`
      }

      describe(`index - ${testName}`, async () => {
        it('/', async () =>
          takeAndCompareScreenshot(browser, '', screenshotType, screenshotSize))
      })

      describe(`access about from index - ${testName}`, async () => {
        it('/about', async () =>
          takeAndCompareScreenshot(
            browser,
            '',
            screenshotType,
            screenshotSize,
            '#about',
          ))
      })
    })
  })
})
