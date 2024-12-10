//Noa ben david
//noale8642@gmail.com | 054-6664308

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        //navigate to site
        await page.goto('https://testsite.getjones.com/ExampleForm/');

        //fill in the fields
        await page.type('#name', 'Noa Ben David');
        await page.type('#email', 'noabendavid2001@gmail.com');
        await page.type('#phone', '0546664308');
        await page.type('#company', 'jones');
        await page.select('#employees', '51-500');//bonus

        await page.screenshot({ path: './screenshot.png' });

        await page.click('.primary.button');//clicking 'request a call back' button

        await page.waitForNavigation();//wait for the thank you page to upload

        console.log('thank you page reached successfully!');
    }
    
    catch (error) {
        console.error('An error occurred:', error);
    }
    finally { //using finally to close the browser even if an error occured.
        await browser.close();
    }
})();


