import { SparklinePage } from './app.po';

describe('sparkline App', () => {
  let page: SparklinePage;

  beforeEach(() => {
    page = new SparklinePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
