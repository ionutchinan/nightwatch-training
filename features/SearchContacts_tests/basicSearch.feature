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
Then the department listed should be:"Software Services - Travel"


Scenario: Happy path: Search the employee directory using a partial name
Given the user is on the contacts page
When the user enters:"Pop" in the search box
And the user clicks the search button
Then the only results shown are the ones that have:"Pop" in their name
Then the user logs out
