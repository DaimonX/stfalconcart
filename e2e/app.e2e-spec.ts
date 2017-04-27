import { TestmenuPage } from './app.po';

describe('testmenu App', () => {
  let page: TestmenuPage;

  beforeEach(() => {
    page = new TestmenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
