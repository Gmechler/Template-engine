# Developer-profile-pdf-generator

This is a pdf generator that will create a formated pdf with the infomration available on git hub for a provided username. It is also able to add simple styling based on user input.

# Motivation

This app is designed to assit a manager in presenting some basic developer info for their team or a cadidate pool.

<img src="/assets/imgs/screenshot_1.png" width=400>

# Framework

I used node.js and Javascript for this app. I also used the following nope packages inquirer, axios, html-pdf, util, and fs.

# code example

The app utilizes try/await/catch in an async function to obtain user input and run an axios call to github.

<img src="assets\imgs\code_1-screenshot_2.png" width=400>

utilizing template literals html code is generated and returned data is organized and displayed

<img src="assets\imgs\code_2-screenshot_3.png" width=400>

css is added inline and include a background color specified by the user from the initial prompt.

<img src="assets\imgs\code_3-screenshot_4.png" width=400>

# api

Github is the only api used and does not require a key

# Improvements

The html-pdf npm has limited usability and apparently security issues. This could be replaced to provide wider/simpler styling options.

# Credit

Much credit goes to Deverson1107 and Diverchild. This project was only accomplished at the level it was due to our combined problem solving.

# License

MIT
Copyright <2019> <COPYRIGHT Grayson Mechler>

# What I learned

learning to use the try await catch methods was quite difficult and required quite a bit of outside help on this project but I was able to offer help to others in the area of styling.
