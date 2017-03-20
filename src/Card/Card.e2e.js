import eyes from 'eyes.it';

describe('Card and Grid', () => {
  eyes.it('should not break design', () => {

    const element = $('[data-hook="card-example"]');

    browser.get('iframe.html?selectedKind=Common&selectedStory=Grid%20with%20card%20layout');

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element), 15000);
  });
});
