import { browser, ElementFinder, element, by } from 'protractor';

describe('TestSuite_01 - Web Browser', () => {
    beforeAll(() => {
        browser.get('/#/');
    });

    it('TC_01 - handle web browser demo', () => {
        // Open url
        browser.get('http://localhost:4200/', 30);

        // Set size of browser
        browser.manage().window().setSize(1366, 768);

        // Get size of browser
        browser.manage().window().getSize().then(function (size) {
            console.log('Browser width: ' + size.width);
            console.log('Browser height: ' + size.height);
        });

        // Set position
        browser.manage().window().setPosition(200, 200);
        browser.manage().window().getPosition().then(function (position) {
            console.log('Browser position x: ' + position.x);
            console.log('Browser position y: ' + position.y);
        });

        // Maximize browser
        browser.manage().window().maximize();

        // Get title
        browser.getTitle().then(function (title) {
            console.log('Title: ' + title);
        });

        // Get Url
        browser.getCurrentUrl().then(function (url) {
            console.log('Url: ' + url);
        });

        // Get page source
        browser.getPageSource().then(function (pageSource) {
            // console.log('Page Source: ' + pageSource);
        });

        // Navigation
        browser.navigate().refresh();
        element(by.id('add-contact')).click();
        browser.navigate().back();
        browser.navigate().forward();
        browser.navigate().to('http://localhost:4200/add');

        // Switch to
        // browser.switchTo().alert().accept();
        // browser.switchTo().alert().dismiss();
        // browser.switchTo().alert().getText().then(function (text) {
        //     console.log('Alert text: ' + text);
        // });
        // browser.switchTo().alert().sendKeys('Protractor e2e Testing');
        // browser.switchTo().frame(0);
        // browser.switchTo().frame(element(by.xpath(`//iframe[@name='theFrame']`)));
        // browser.switchTo().defaultContent();

        // browser.getWindowHandle().then(function (windownID) {
        //     console.log('Windown ID: ' + windownID);
        // });

        // browser.getAllWindowHandles();
        // browser.switchTo().window('');

        // browser.close();

    });

    xit('TC_02 - ', () => {

    });

    xit('TC_03 - ', () => {

    });
});
