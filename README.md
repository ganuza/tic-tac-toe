# Tic Tac Toe

### Abstract

The Tic-Tac-Toe Project is my Final Solo Project of Module 1 of Turing School.  The project lets users play Tic-Tac-Toe by placing tokens on the board and then will check for and announce wins or draws.  Upon a win, the score for that winner is incremented.  A different player starts each game and players toggle back and forth as between turns.  After a winner is declared, users can no longer place tokens in any open spaces on the grid.  And finally, after a win or a draw, the game resets after a timeout.

### Installation instructions

To clone down this repository to your local machine:

* Fork the tic-tac-toe repository
* Clone down your new repository to your local machine
* cd into the repository on your local machine
* Open the repository in your code editor
* You will have access to the HTML, CSS, and JavaScript files

### Preview of App:

<img width="1428" alt="Screenshot 2023-06-13 at 7 25 03 PM" src="https://github.com/ganuza/tic-tac-toe/assets/31826116/cc24b07e-deae-4119-ac17-7d633725f2fe">


### Context:

The tic-tac-toe application is a solo project that was assigned in the fifth week of Mod 1 at the Turing School of Software and Design.  I put in approximately 40 hours over 7 days to complete this project.

### Contributors:

- Adrian Zabolitzki - https://github.com/ganuza

### Learning Goals:

* Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Iterate through/filter DOM elements using for loops
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge


### Wins 

* Completing the project functionality a day before the due date, leaving the last day for rafactoring and stylistic changes

* Kayla's help on refactoring my gigantic token names in the gameBoard variable

* Coming up with a fun design for the background

* Getting my checkForWins function to work

### Challenges:

* The checkForWins function took a while to figure out and get right.  Even now it still seems messy.

* The timeout feature created timing issues associated with the reset of the game and it took quite a while to figure out that even though the timer started counting down, JavaScript kept going through the code.

* Stopping the ability for users to click on open spaces on the grid after a win was also associated with the timeout and and hard to fix.
