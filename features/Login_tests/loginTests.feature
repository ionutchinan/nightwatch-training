Feature: Log into the Timesheet application


Scenario Outline: Log in using valid credentials
Given the user opens the login page
And the title is "Timesheet"
When the user enters the username:<username> and the password:<password>
And the user clicks the "Login" button
Then the user:<username> reaches the Dashboard

Examples:
|username|password|
|radu.pop|    test|
|Radu.POP|    test|

Scenario Outline: Log in using invalid credentials
Given the user opens the login page
And the title is "Timesheet"
When the user enters the username:<username> and password:<password>
And the user clicks the "Login" button
Then the user gets an error message

Examples:
|username|password|
|radu.pop|    TEST|
|john.doe|   login|
|jane.doe|    test|
|radu.pop|   12345|
|  blank |   blank|
|radu.pop|   blank|