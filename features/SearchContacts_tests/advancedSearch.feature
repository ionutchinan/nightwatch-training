Feature: Search for contacts using advanced search filters

Background: 
Given the user is logged in
And the page language is English

Scenario: Happy path: Search for all the employees of a subsidiary
Given the user is on the contacts page
When the user clicks the advanced search button
And the user clicks the Subsidiary dropdown
And the user selects "Computer Solutions B.V."
And the user clicks the search button
Then the only results shown are the employees belonging to "Computer Solutions B.V."
Then the user logs out