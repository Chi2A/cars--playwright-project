import { expect, Locator, Page } from "@playwright/test";
export class HomePage {
  title: Locator;
  expectedUrl: Locator;
  makeSelectDropdown: Locator;
  modelDropdown: Locator;
  distanceDropdown: Locator;
  zipDropdown: Locator;
  showButton: Locator;

  constructor(page: Page) {
    this.title = page.locator('h1[class="hero-title "]');
    this.makeSelectDropdown = page.locator('select[name="makes[]"]');
    this.modelDropdown = page.locator('select[name="models[]"]');
    this.distanceDropdown = page.locator('select[name="maximum_distance"]');
    this.zipDropdown = page.locator('input[name="zip"]');
    this.showButton = page.locator(
      'spark-fieldset[variant="melded"] spark-button[type="submit"]'
    );
  }
  async validateTitle(expectedTitle: string): Promise<void> {
    await expect(this.title).toHaveText(expectedTitle);
  }
  async giveDetailsForSearch(
    make: string,
    model: string,
    distance: string,
    zip: string
  ): Promise<void> {
    await this.makeSelectDropdown.selectOption(make);
    await this.modelDropdown.selectOption(model);
    await this.distanceDropdown.selectOption(distance);
    await this.zipDropdown.fill(zip);
    await this.showButton.click();
  }
}
