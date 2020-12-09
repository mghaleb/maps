import { newSpecPage } from '@stencil/core/testing';
import { IMap } from '../i-map';

describe('i-map', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IMap],
      html: `<i-map></i-map>`,
    });
    expect(page.root).toEqualHtml(`
      <i-map>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </i-map>
    `);
  });
});
