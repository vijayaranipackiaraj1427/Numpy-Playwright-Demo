// Generated from: features/Registration.feature
import { test } from "playwright-bdd";

test.describe('User Registration functionality', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is on the user registration page', null, { page }); 
  });
  
  test('User navigates to the Register page', async ({ When, Then }) => { 
    await When('the user clicks the Register link on the Home page'); 
    await Then('the user navigates to the Register form'); 
  });

  test('Error messages are displayed when all fields are empty during registration', async ({ When, Then }) => { 
    await When('the user clicks the "Register" button with all fields empty'); 
    await Then('the error "Please fill out this field." shows under the Username box'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Registration.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the user registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks the Register link on the Home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user navigates to the Register form","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the user registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When the user clicks the \"Register\" button with all fields empty","stepMatchArguments":[{"group":{"start":20,"value":"\"Register\"","children":[{"start":21,"value":"Register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the error \"Please fill out this field.\" shows under the Username box","stepMatchArguments":[{"group":{"start":10,"value":"\"Please fill out this field.\"","children":[{"start":11,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end