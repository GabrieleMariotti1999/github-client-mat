import { browser, by, element } from 'protractor';
export class IssueAddPage {
    navigateTo() {
        return browser.get('/issue-add');
    }
}
