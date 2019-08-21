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
Then the user gets the following error message:<message>

Examples:
|     username|password|                      message|
|     radu.pop|    TEST| Invalid username or password|
|        admin|   login| Invalid username or password|
|     john.doe|    test| Invalid username or password|
|razvan.vuscan|   12345| Invalid username or password|
|        blank|   blank|       User name not provided|        
|     radu.pop|   blank|        Password not provided| 