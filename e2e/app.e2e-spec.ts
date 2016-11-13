import { AllymapPage } from './app.po';

describe('allymap App', function() {
  let page: AllymapPage;

  beforeEach(() => {
    page = new AllymapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
