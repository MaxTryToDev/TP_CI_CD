const { test, expect } = require('@playwright/test');

test('page d\'accueil affiche le bon titre', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
