# Project Title

Random Quote Generator

## Project Description

This was one of my first APIs to use. No political statement is trying to be made with this project.

### Things to know

Upon clicking the get-quote button, the API endpoint is called, and the data is parsed. The randomNum variable gernearates a random number less than the length of messages in the data, and the red green and blue picked numbers are chosen at random between 0 and 255. Then, a random color is created using these three variables, which will be assigned to the background of the page.

The html variable is turned into a string including a paragraph tag and the quote chosen at random with the randomNum as the index.

The quote is rendered to the DOM, as well as the author. The background is set to the random color. If the red, green, and blue values average to less than 185, the font color is white. Otherwise, it is black.

The tweet-quote button allows the user to connect to their twitter account and tweet the quote that is rendered on the page, and will include the hashtag 'trump'.

Eventually I plan to refactor this project to include multiple presidents and turn it into a multiple choice guessing game. 
