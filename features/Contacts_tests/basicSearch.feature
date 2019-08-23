Feature: Search for contacts using basic search

Background: 
Given the user is logged in
And the page language is English

Scenario: Search for a current employee using their full name
Given the user is on the contacts page
When the user enters:"Razvan Vuscan" in the search box
And the user clicks the search button
Then the only result shown is the employee:"Vuscan Razvan"
And the user logs out