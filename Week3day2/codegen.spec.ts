import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Username');
  await expect(page.locator('#login')).toContainText('Password');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('democsr2');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('democsr2');
  await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('crmsfa');
  await expect(page.locator('#container')).toMatchAriaSnapshot(`
    - img
    - heading "Leaftaps Login" [level=2]
    - paragraph:
      - text: Username
      - textbox "Username": democsr2
    - paragraph:
      - text: Password
      - textbox "Password": crmsfa
    - paragraph:
      - button "Login"
    `);
  await page.getByRole('button', { name: 'Login' }).click();
});