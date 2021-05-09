let dataTest = require('../DataTest/login');
let loginPage = require('../page_Object/login')
describe('function login', () => {
    
    it('login with the empty password and username wrong!', () => {
        let invalidUsername = dataTest.INVALID_USERNAME;
        loginPage.openLandingPage('');
        loginPage
        .clickBtnLoginOutside()
        .waitDisplayed()
        .inputUserName(invalidUsername.username)
        .inputPassWord(invalidUsername.password)
        .clickBtnLoginFormInside();
        browser.pause(3000);
    });
});