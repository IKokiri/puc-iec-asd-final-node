import puppeteer from 'puppeteer'
import options from './options.js';

const getPage = async () => {

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
  
    return page
} 

export default getPage
