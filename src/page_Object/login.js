let loginBase = require("../page_Object/loginBase");
const LOGINBTN_OUTSIDE = '.MuiButton-label';
const USERNAME_TXT = '[name="username"]';
const PASSWORD_TXT = '[name="password"]';
const LOGINBTN_INSIDE = '.MuiButtonBase-root.MuiButton-root.MuiButton-contained.btnLogin.MuiButton-containedSecondary';
const TEXTRETURN = '.MuiTypography-root.titleBanner.MuiTypography-h5.MuiTypography-gutterBottom.MuiTypography-alignCenter';
class login extends loginBase {
    waitDisplayed() {
        $(USERNAME_TXT).waitForDisplayed(15000);
        return this;
    }
    inputUserName(username) {
        $(USERNAME_TXT).setValue(username);
        return this;
    }
    inputPassWord(password) {
        $(PASSWORD_TXT).setValue(password);
        return this;
    }
    clickBtnLoginOutside() {
        $(LOGINBTN_OUTSIDE).click();
        return this;
    }
    clickBtnLoginFormInside() {
        $(LOGINBTN_INSIDE).click();
        return this;
    }
    veryfyLoginText() {
        let TextReturn = $(TEXTRETURN).getText();
        console.log('text return:', TextReturn);
        let modelText = "Các đối tượng chính";
        let ERRlOGIN_TXT = "err: DAY LA LOI!"
        expect(TextReturn).to.include(modelText, ERRlOGIN_TXT);
    }
}
module.exports = new login();