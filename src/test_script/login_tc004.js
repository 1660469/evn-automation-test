let dataTest = require('../DataTest/login');
let loginPage = require('../page_Object/login')
describe('function login', () => {
    
    it('login with the password correctly and username empty!', () => {
        let EMPTYUSERNAME = dataTest.EMPTY_USERNAME;
        loginPage.openLandingPage('');
        loginPage
        .clickBtnLoginOutside()
        .waitDisplayed()
        .inputUserName(EMPTYUSERNAME.username)
        .inputPassWord(EMPTYUSERNAME.password)
        .clickBtnLoginFormInside();
        browser.pause(3000);
    });
});