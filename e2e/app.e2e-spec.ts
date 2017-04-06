import { Atlanits4Page } from './app.po';

describe('atlanits4 App', function() {
  let page: Atlanits4Page;

  beforeEach(() => {
    page = new Atlanits4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
