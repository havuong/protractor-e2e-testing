import { browser, ElementFinder, element, by } from 'protractor';

describe('TestSuite_01 - Create new Contact', () => {
    beforeAll(() => {
        browser.get('/#/');
    });

    it('TC_01 - Create new Contact with Name', function createNewContact() {
        const creatNewButton: ElementFinder = element(by.id('add-contact'));
        creatNewButton.click();

        const addContactForm: ElementFinder = element(by.xpath(`//h4[text()='Add New Contact']`));
        expect(addContactForm.isDisplayed()).toBe(true);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/add');

        const nameTextBox: ElementFinder = element(by.id('contact-name'));
        nameTextBox.sendKeys('Protractor API');

        nameTextBox.getAttribute('value').then(function (nameValue: String) {
            console.log('Name value = ' + nameValue);
        });

        expect(nameTextBox.getAttribute('value')).toEqual('Protractor API');

        const createButton: ElementFinder = element(by.css('.create-button'));
        createButton.click();

        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');

    });

    it('TC_02 - Create new Contact with Name/ Email/ Phone', function createNewContact() {
        const creatNewButton: ElementFinder = element(by.id('add-contact'));
        creatNewButton.click();

        const addContactForm: ElementFinder = element(by.xpath(`//h4[text()='Add New Contact']`));
        expect(addContactForm.isDisplayed()).toBe(true);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/add');
        // Input Name
        const nameTextBox: ElementFinder = element(by.id('contact-name'));
        nameTextBox.sendKeys('Protractor API');

        nameTextBox.getAttribute('value').then(function (nameValue: String) {
            console.log('Name value = ' + nameValue);
        });

        expect(nameTextBox.getAttribute('value')).toEqual('Protractor API');

        // Input Email
        const emailTextBox: ElementFinder = element(by.id('contact-email'));
        emailTextBox.sendKeys('protractorapi@gmail.com');

        emailTextBox.getAttribute('value').then(function (emailValue: String) {
            console.log('Email value = ' + emailValue);
        });

        expect(emailTextBox.getAttribute('value')).toEqual('protractorapi@gmail.com');

        // Input Phone
        const phoneTextBox: ElementFinder = element(by.id('contact-tel'));
        phoneTextBox.sendKeys('0123456789');

        phoneTextBox.getAttribute('value').then(function (phoneValue: String) {
            console.log('Phone value = ' + phoneValue);
        });

        expect(phoneTextBox.getAttribute('value')).toEqual('0123456789');

        // Click Create
        const createButton: ElementFinder = element(by.css('.create-button'));
        createButton.click();

        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');

    });
});
