import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import puppeteer from 'puppeteer'
import { testDir, goldenDir, diffDir } from './config'
import { takeAndCompareScreenshot } from './helpers'

// TODO: change these to import
const fs = require('mz/fs')

// Test configuration
configure({ adapter: new Adapter() })
jest.setTimeout(10000)

describe('dinosaurs are partying', () => {
  let browser = null
  let page = null

  beforeAll(async () => {
    if (!fs.existsSync(goldenDir)) {
      console.log("You don't have any golden screenshots!")
      // TODO: abort fully
      return
    }
    if (!fs.existsSync(testDir)) fs.mkdirSync(testDir)
    if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir)
  })

  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  afterEach(() => browser.close())

  describe('index', async () => {
    beforeEach(async () => page.setViewport({ width: 800, height: 600 }))
    it('/', async () => takeAndCompareScreenshot(page, ''))
  })
})
