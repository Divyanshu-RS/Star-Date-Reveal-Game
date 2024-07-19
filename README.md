# Star-Date-Reveal-Game

Welcome to the Star Date Reveal Game! This interactive, dynamic, and responsive web application lets users guess their birth date by selecting checkboxes based on numbers displayed on cards. The underlying logic is inspired by principles of binary search and bitwise operations, making it an interesting blend of entertainment and computer science concepts.

Check out the live version of the game <a href="https://star-date-reveal-game-divyanshu-rs.vercel.app/">here.</a>

## Overview
The Star Date Reveal Game is a web application that uses a set of cards, each containing a unique set of numbers, to guess the user's birth date. The user selects checkboxes based on whether their birth date appears on the displayed cards, and the game algorithm calculates the birth date based on these selections. The game is designed to be dynamic and responsive, ensuring a seamless experience across different devices and screen sizes.

## Tech Stack
<ul>
<li>HTML: Structure of the web page.</li>
<li>CSS: Styling of the web page, ensuring responsiveness.</li>
<li>JavaScript: Game logic and DOM manipulation.</li>
<li>Vercel: Deployment platform for the live version.</li>
</ul>

## Data Structure and Algorithm 
The "Star Date Reveal Game" utilizes several data structure concepts and techniques:

#### 1.Arrays:
The cardNumbers object in data.js contains arrays of numbers representing the dates displayed on each card. Each key corresponds to a card, and the values are arrays of numbers that appear on that card​(data)​.

#### 2.DOM Manipulation:
The code in main.js dynamically creates and manipulates HTML elements using JavaScript to display the cards and checkboxes. This involves creating div, label, and input elements, setting their attributes, and appending them to the DOM​(main)​.

#### 3.Event Handling:
An event listener is added to the button with the ID checkResult, which calculates the user's birth date based on the selected checkboxes. The click event triggers a function that checks which checkboxes are selected, retrieves their associated values, and sums them to determine the birth date​(main)​.

#### 4.Bitwise Operations (implicitly):
The logic behind the birth date guessing game is based on the concept of representing numbers in binary. Each card corresponds to a specific bit position, and the presence of a number on a card signifies a 1 in that bit position. The sum of the numbers from the selected cards reconstructs the user's birth date. This method indirectly uses principles from bitwise operations.

## Data Structure
The game utilizes the following data structures:

<li>Arrays: To store numbers that appear on each card.</li>
<li>Objects: To organize arrays corresponding to each card.</li>

The cardNumbers object in data.js contains arrays of numbers, each representing a set of dates displayed on a card:

Below is a representation of the card numbers:

| Card | Numbers                                                   |
|------|-----------------------------------------------------------|
| 1    | 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31 |
| 2    | 2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31 |
| 3    | 4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31 |
| 4    | 8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31 |
| 5    | 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 |
