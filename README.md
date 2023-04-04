# UTA-Bootcamp-Challenge10
## Object-Oriented Programming Challenge: Team Profile Generator
----------------------------------------------------------------------
## Description

This project is a command-line application that uses Node.js to gather information about team members and generates an HTML webpage displaying the data provided by the user. In addition to developing the application, the project required the use of Jest and Inquirer to perform unit tests on each aspect of the code, ensuring that it passed all the tests.

----------------------------------------------------------------------

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
* "User Story" & "Acceptance Criteria" listed above have been provided by the UTA Bootcamp Program 2022.
----------------------------------------------------------------------

## Table of Contents

- [Installation](#installation)
- [Built Using](#built-using)
- [Preview](#preview)
- [Links](#links)
- [License](#license)

----------------------------------------------------------------------

## Installation

1. Clone/download git repository.
2. Run command "npm run test" (jest for tests)
3. Run command "node index.js" to generate team profile.
4. Open team.html in live server to view updated profile cards.


#

## Built Using

- JavaScript
- Node.js
- Inquirer
- Jest

#

## Preview

<img src= "assets/images/C10 Screenshot 1.png"/>
<img src= "assets/images/C10 Screenshot 2.png"/>
<img src= "assets/images/C10 Screenshot 3.png"/>

#

## Links

- Video Submission Link: https://drive.google.com/file/d/1E1ICKWrB_o4n25Rx-CHAR4a5Tv8E8PqR/view?usp=sharing 
- GitHub Repository Link: https://github.com/khevb27/UTA-Bootcamp-Challenge10 

----------------------------------------------------------------------
## License

Please refer to licensing documentation in the project repository.

<img src="https://img.shields.io/badge/license-MIT License-blue.svg" alt="GitHub License">

----------------------------------------------------------------------
