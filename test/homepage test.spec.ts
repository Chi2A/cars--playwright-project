import { expect, test, Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";
test("Home Page title validation", async ({ page }) => {
  let homePage = new HomePage(page);
  await page.goto("https://www.cars.com");
  await homePage.validateTitle("Imagine the possibilities");
  await homePage.giveDetailsForSearch("audi", "audi-a8", "40", "60062");
  await page.waitForTimeout(10_000);
});
