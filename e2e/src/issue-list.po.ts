import { browser, by, element } from 'protractor';

export class IssueListPage {
    navigateTo() {
        return browser.get('/issue-list');
    }

    getTitle() {
        return element(by.id('app-title-main')).getText();
    }
    getDefaultPageSize() {
        return element(by.css('.mat-paginator-container .mat-select-trigger .ng-star-inserted')).getText();
    }
    setPaginatorDefault(size: Number) {
        return element(by.css('.mat-paginator-container .mat-select-trigger .mat-select-value')).click().then(() => {
            return element(by.cssContainingText('.mat-option .mat-option-text', size.toString())).click();
        });
    }
    getTableSize() {
        return element(by.css('.mat-paginator-range-actions .mat-paginator-range-label')).getText().then(text => {
            const splitted = text.split(' ');
            if (splitted.length > 0) {
                return Number(splitted[splitted.length - 1]);
            }
            return 0;
        });
    }
    getFirstIssueNumber() {
        return element(by.css('tbody > tr:first-child > td:first-child')).getText();
    }
    clickOderButton() {
        return element(by.css('thead > tr:first-child > th:first-child button.mat-sort-header-button')).click();
    }
    clickOnAddIssue() {
        return element(by.id('AddIssueButton')).click();
    }
    getAddIssueButton() {
        return element(by.id('AddIssueButton'));
    }
}
