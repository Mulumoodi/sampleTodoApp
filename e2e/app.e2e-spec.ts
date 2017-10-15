import { MydreamappPage } from './app.po';

describe('mydreamapp App', function() {
  let page: MydreamappPage;

  beforeEach(() => {
    page = new MydreamappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
