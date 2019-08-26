Feature: Search for contacts using basic search

Background: 
Given the user is logged in
And the page language is English

Scenario: Happy path: Search for a current employee using their full name
Given the user is on the contacts page
When the user enters:"Razvan Vuscan" in the search box
And the user clicks the search button
Then the only result shown is the employee:"Vuscan Razvan"
When the user clicks on the result
Then the position listed should be:"Software Tester | Automation"
Then the user logs out

Scenario: Search for a current employee using their partial name
Given the user is on the contacts page
When the user enters:"Pop" in the search box
And the user clicks the search button
Then the only results shown are the employees whos names contain:"Pop"
Then the user logs out