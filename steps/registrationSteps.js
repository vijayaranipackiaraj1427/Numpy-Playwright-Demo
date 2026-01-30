import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
import { test, expect } from '@playwright/test';
import { Register } from '../pom/Register.js';
import { log } from 'node:console';

let registerObj;

Given('the user is on the user registration page', async ({page}) => {
  // Step: Given the user is on the user registration page
  // From: features/Registration.feature:7:5
    registerObj = new Register(page);
    await registerObj.launchPage();
});

When('the user clicks the Register link on the Home page', async ({}) => {
  // Step: When the user clicks the "Register" link on the Home page
  // From: features/Registration.feature:10:5
    await registerObj.clickRegister();
});

Then('the user navigates to the Register form', async ({}) => {
  // Step: Then the user navigates to the Register form
  // From: features/Registration.feature:11:5
    await expect(registerObj.userNameText).toBeVisible();
});

When('the user clicks the {string} button with all fields empty', async ({}, arg) => {
  // Step: When the user clicks the "Register" button with all fields empty
  // From: features/Registration.feature:14:5
  console.log('the user clicks the {string} button with all fields empty');
});

Then('the error {string} shows under the Username box', async ({}, arg) => {
  // Step: Then the error "Please fill out this field." shows under the Username box
  // From: features/Registration.feature:15:5
  console.log('the error {string} shows under the Username box');
});

