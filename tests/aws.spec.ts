import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://piero-cloud-testing-project-2025.s3-website-sa-east-1.amazonaws.com/');
});

test('Smoke Test for Login', async ({ page }) => {

  await page.getByPlaceholder('Usuario').fill('piero QA');
  await page.getByPlaceholder('Contraseña').fill('123456');
 
  await page.getByRole('button',{name: 'Ingresar'}).click();

  
 
})