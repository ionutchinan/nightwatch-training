Feature: Edit the personal details in the profile section

Background: 
Given the user is logged in

Scenario: Edit the fields using valid data
Given the user is on the profile page
When the user clicks the edit icon
And enters the following: email:"popradu@gmail.com", Skype:"poPradu", company phone number:"+40388646", personal phone number:"+40772087665", car number:"CJ05LEL"
And the user clicks the "Save" button
Then the information entered should appear on the profile
