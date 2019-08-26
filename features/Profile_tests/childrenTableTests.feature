Feature: Adding children in the profile section

Background: 
Given the user is logged in
And the page language is English
@tag
Scenario: Add a child to the user profile using valid data
Given the user is on the profile page
When the user clicks the "Add" button in the children section
And enters the following: First name:"Dana", Last name:"Vuscan", Gender:"Female" and Birthdate:"05.06.2017"
And the user clicks the "Add" button
Then this child should appear in the children section of the profile
Then the user logs out