# Test Task

## [Task](https://drive.google.com/file/d/1BK2W8VEwzz0lg1_eyy294QCO5tpdJ8Hm/view?usp=sharing)
## [Deployment](https://rc-3222.github.io/built-test-task-7688732/)

## How to Use:

1. Clone this repo by running the script below:

```
git clone https://github.com/RC-3222/test-task-7688732.git
```
...or by any other available means.

2. Open it in your code editor (or a terminal).
3. Run `npm install` to install all the dependencies.
4. Start the dev server by running `npm run dev` and then you should be able to see the app in your browser at `localhost:9000`


## Additional Scripts

- `npm run build` builds the app for production and puts the results to `dist` folder

## App Structure

```
📦src                               
 ┣ 📂scss                           
 ┃ ┣ 📜_base.scss                   # Basic styling setup + initial ('Dark') theme setup
 ┃ ┣ 📜_calculator.scss             # Styling for calculator itself
 ┃ ┣ 📜_theme-switch.scss           # Styling for theme sitcher + 'Light' theme setup
 ┃ ┗ 📜index.scss                   # Main styling file which acts as an entry point
 ┣ 📂js                             
 ┃ ┣ 📂interface                 
 ┃ ┃ ┣ 📜operators.js               # Contains initialization logic for operators on calculator's keypad. 
 ┃ ┃ ┣ 📜numbers.js                 # Same as with the file above, but this time for numbers. 
 ┃ ┃ ┣ 📜switch-theme.js            # Contains logic for switching themes. 
 ┃ ┃ ┗ 📜output.js                  # Contains output getter.
 ┃ ┣ 📂model                     
 ┃ ┃ ┣ 📜calculator.js              # Main logic for the calculator as a whole.
 ┃ ┃ ┗ 📜operations.js              # Main logic for the available math operations.
 ┃ ┣ 📜index.js                     # Main JS file which acts as an entry point.
 ┃ ┗ 📜utils.js                     # Contains utility funtions for number validation and output formatting.
 ┗ 📜index.html                     # HTML template utilised by webpack.
```
