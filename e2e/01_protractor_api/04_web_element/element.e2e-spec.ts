import { browser, ElementFinder, element, by } from 'protractor';

describe('TestSuite_01 - Web Element', () => {
    beforeAll(() => {
        browser.get('/#/');
    });

    it('TC_01 - Web Element', () => {
        // Define an element
        const creatNewButton: ElementFinder = element(by.id('add-contact'));

        // Click (Button/ Radio Button/ Checkbox/ Link/ Custom Dropdown)
        creatNewButton.click();

        // Sendkey (Texrbox/ TextArea)
        const nameTextBox: ElementFinder = element(by.id('contact-name'));
        nameTextBox.sendKeys('Protractor Old');
        browser.sleep(2000);
        nameTextBox.clear();
        browser.sleep(2000);
        nameTextBox.sendKeys('Protractor New');

        // Get attribute value
        nameTextBox.getAttribute('value').then(function (value) {
            console.log('Name input: ' + value);
        });

        // Submit (work only with form: //form)
        const createButton: ElementFinder = element(by.css('.create-button'));
        createButton.click();

        // Get text
        const deleteAllContactButton = element(by.css('.mat-raised-button.mat-primary>span'));
        deleteAllContactButton.getText().then(function (text) {
            console.log('Text: ' + text);
            expect(text.trim()).toEqual('Delete All Contacts');
        });

        // Get tag name
        const deleteAllContactButtonx = element(by.css('.mat-raised-button.mat-primary'));
        deleteAllContactButtonx.getTagName().then(function (tagName) {
            console.log('TagName: ' + tagName);
            expect(tagName).toEqual('button');
        });

        // Get size (GUI: size/ font/ color/ location)
        deleteAllContactButtonx.getSize().then(function (size) {
            console.log('Size height: ' + size.height);
            console.log('Size width: ' + size.width);
        });

        // Get css value (background/ color/ font)
        deleteAllContactButtonx.getCssValue('background-color').then(function (color) {
            console.log('Color: ' + color);
        });

        // Get location
        deleteAllContactButtonx.getLocation().then(function (location) {
            console.log('Location x: ' + location.x);
            console.log('Location y: ' + location.y);
        });

        // isDisplayed (all elements) - visible
        expect(deleteAllContactButtonx.isDisplayed()).toBe(true);

        // is Enable (textbox/ textarea/ button/ radio button/ checkbox)
        expect(deleteAllContactButtonx.isEnabled()).toBe(true);

        // isSelected (radio button/ checkbox)
        expect(deleteAllContactButtonx.isSelected()).toBe(false);

        // isPresent (add elements) - invisible/ visible (in DOM)
        const messageContainer = element(by.id('cdk-describedby-message-container'));
        expect(messageContainer.isPresent()).toBe(true);

        expect(nameTextBox.isPresent()).toBe(false);
    });

});
