import { TrainingProjPage } from './app.po';

describe('training-proj App', () => {
  let page: TrainingProjPage;

  beforeEach(() => {
    page = new TrainingProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
