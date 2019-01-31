import { browser, by, element } from 'protractor';
const token = 'ad17649d47f9deaa4b5f6a27dd7f5739cd692ad4';
export class LoginPage {
    navigateTo() {
        return browser.get('/login');
    }

    getTitleText() {
        return element(by.css('mat-card-title')).getText();
    }
    login() {
        return element(by.name('token')).sendKeys(token).then(() => {
            return element(by.css('mat-card-actions button')).click();
        });
    }
}
