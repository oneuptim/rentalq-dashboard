import { Angular2ExamplePage } from './app.po';

describe('angular2-example App', () => {
  let page: Angular2ExamplePage;

  beforeEach(() => {
    page = new Angular2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
