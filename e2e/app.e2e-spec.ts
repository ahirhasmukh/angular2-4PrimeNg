import { PrimeNgDemoPage } from './app.po';

describe('prime-ng-demo App', function() {
  let page: PrimeNgDemoPage;

  beforeEach(() => {
    page = new PrimeNgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
