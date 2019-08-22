Feature: Edit the details in the profile section

Background: 
Given the user is logged in
And the page language is English

Scenario: Edit the profile details' fields using valid data
Given the user is on the profile page
When the user clicks the edit icon
And enters the following: email:"popradu@gmail.com", skype:"poPradu", company phone number:"+40388646", personal phone number:"+40772087665", car number:"<CJ05LEL>"
And the user clicks the "Save" button
Then the information entered should appear on the profile
And the user logs out
