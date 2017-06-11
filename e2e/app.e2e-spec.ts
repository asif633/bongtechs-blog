import { RoutingExamplePage } from './app.po';

describe('routing-example App', () => {
  let page: RoutingExamplePage;

  beforeEach(() => {
    page = new RoutingExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
