Feature: User Registration functionality
  As a new user
  I want to register in the DS Algo portal
  So that I can create an account and access the application

  Background:
    Given the user is on the user registration page

  Scenario: User navigates to the Register page
    When the user clicks the Register link on the Home page
    Then the user navigates to the Register form

  Scenario: Error messages are displayed when all fields are empty during registration
    When the user clicks the "Register" button with all fields empty
    Then the error "Please fill out this field." shows under the Username box
  