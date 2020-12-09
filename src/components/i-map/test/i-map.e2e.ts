import { newE2EPage } from '@stencil/core/testing';

describe('i-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<i-map></i-map>');

    const element = await page.find('i-map');
    expect(element).toHaveClass('hydrated');
  });
});
