import { AppPage } from './app.po';
import { LoginPage } from './login.po';
import { browser } from 'protractor';
import { IssueListPage } from './issue-list.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let loginPage: LoginPage;
  let issueListPage: IssueListPage;

  beforeEach(() => {
    page = new AppPage();
    loginPage = new LoginPage();
    issueListPage = new IssueListPage();
  });

  it('should display login title', () => {
    loginPage.navigateTo();
    expect(loginPage.getTitleText()).toEqual('Github Client');
  });
  it('should login', () => {
    // expect(loginPage.getTitleText()).toEqual('Github Client');
    loginPage.login().then(() => {
      browser.getCurrentUrl().then(url => {
        const match = url.endsWith('/issue-list');
        expect(match).toBeTruthy();
        browser.sleep(3000);
      });
    });
  });
  it('should have title bar', () => {
    issueListPage.getTitle().then(title => {
      expect(title).toBeDefined();
      expect(title).toBeTruthy();
      expect(title).toContain('gabrielemariotti1999');
    });
  });
  it('paginator should have 5 as default', () => {
    issueListPage.getDefaultPageSize().then(size => {
      expect(size).toEqual('5');
    });
  });
  it('paginator should change paginator size', () => {
    issueListPage.setPaginatorDefault(10).then(() => {
      issueListPage.getDefaultPageSize().then(size => {
        expect(size).toEqual('10');
        browser.sleep(2000);
      });
    });
  });
  it('should have more than 10', () => {
    issueListPage.getTableSize().then(size => {
      expect(size).toBeGreaterThan(10);
    });
  });
  it('should have last issue as first issue number', () => {
    issueListPage.getFirstIssueNumber().then(number => {
      issueListPage.getTableSize().then(size => {
        expect(number).toEqual(size.toString());
      });
    });
  });
  it('should change the order by No.', () => {
    issueListPage.clickOderButton().then(() => {
      issueListPage.getFirstIssueNumber().then(number => {
        expect(number).toEqual('1');
      });
    });
  });
  it('should have an issue add button', () => {
    const button = issueListPage.getAddIssueButton();
    expect(button).toBeDefined();
    expect(button).toBeTruthy();
  });
  it('should redirect to issue-add', () => {
    issueListPage.clickOnAddIssue().then(() => {
      browser.getCurrentUrl().then(url => {
        const match = url.endsWith('/issue-add');
        expect(match).toBeTruthy();
        browser.sleep(3000);
      });
    });
  });
});
