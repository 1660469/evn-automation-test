let dataTest = require('../DataTest/login');
let loginPage = require('../page_Object/login')
describe('function login', () => {
    
    it('login with the password and username correctly 1', () => {
        let VALID_ACC = dataTest.VALID_ACC;
        loginPage.openLandingPage('');
        loginPage
        .clickBtnLoginOutside()
        .waitDisplayed()
        .inputUserName(VALID_ACC.username)
        .inputPassWord(VALID_ACC.password)
        .clickBtnLoginFormInside();
        loginPage.veryfyLoginText();
    });
    // it('Case', () => {
    //     allureReporter.addFeature('Feature');
    // })
});