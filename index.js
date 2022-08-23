const puppeteer = require('puppeteer')
const fs = require("fs/promises")
 

const start = async () => {
    // launch browser (hence why it is async)
    const browser = await puppeteer.launch()
    // create a new page or tab in browser
    const page = await browser.newPage()
    // define url to visit
    const url = 'https://example.com'
    // navigate to url to scrap from
    await page.goto(url)

    // define your web scraping logic here
    // visit https://pptr.dev/ for guidelines of using puppeteer
    // For a quick tutorial, 
    //    checkout LearnWebCode @ https://www.youtube.com/watch?v=lgyszZhAZOI

    // after logic close the browser
    await browser.close()
}

start()