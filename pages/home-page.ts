import { expect, Locator, Page } from "@playwright/test";
export class HomePage {
  title: Locator;
  expectedUrl: Locator;
  constructor(page: Page) {
    this.title = page.locator('h1[class="hero-title "]');
  }
  async validateTitle(expectedTitle: string): Promise<void> {
    await expect(this.title).toHaveText(expectedTitle);
  }
}
