let dataTest = require('../DataTest/login');
let loginPage = require('../page_Object/login')
describe('function login', () => {
    
    it('login with the password wrong and username correctly!', () => {
        let INVALIDPASSWORD = dataTest.INVALID_PASSWORD;
        loginPage.openLandingPage('');
        loginPage
        .clickBtnLoginOutside()
        .waitDisplayed()
        .inputUserName(INVALIDPASSWORD.username)
        .inputPassWord(INVALIDPASSWORD.password)
        .clickBtnLoginFormInside();
        browser.pause(3000);
    });
});