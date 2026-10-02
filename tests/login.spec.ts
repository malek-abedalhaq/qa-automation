import { test, expect } from '@playwright/test';

test('user can login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
});