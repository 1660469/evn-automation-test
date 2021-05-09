let dataTest = require('../DataTest/login');
let loginPage = require('../page_Object/login')
describe('function login', () => {
    
    it('login with the password correctly and username wrong!', () => {
        let INVALIDUSERNAME = dataTest.INVALID_USERNAME;
        loginPage.openLandingPage('');
        loginPage
        .clickBtnLoginOutside()
        .waitDisplayed()
        .inputUserName(INVALIDUSERNAME.username)
        .inputPassWord(INVALIDUSERNAME.password)
        .clickBtnLoginFormInside();
        browser.pause(3000);
    });
});