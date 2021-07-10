
# Foodease
## Table of contents
- [Introduction](#Introduction)
- [Getting Started](#Getting-Started)
- [Features](#Features)
- [Future Features](#Future-Features)
- [Technologies](#Technologies)
## Introduction
  Having trouble deciding what to eat with your partner? Taking too look to agree on which restaurant to go to that it ends up closing before you've chose?
  
  FoodEase is here to help prevent squabbling, arguing and time wasting when is comes to food decisions.
  
  Friends and partners are able to send each other a list of foods and swipe through them choosing yes or no secretly and then recieve a final decisions on what to eat!

<code><img height="400" alt="FoodEase demo" src="https://user-images.githubusercontent.com/61637775/125168578-1e0a3580-e19e-11eb-9910-5a589100b929.png"></code>


## Getting Started
In order to run Foodease the expo phone app is required and scan the QR code. Additionally, MongoDB is required in order to run the back-end database.
1. Clone this repo and enter!
   ```bash
   git clone https://github.com/gerseymour/foodease.git
   cd foodease
   ```
2. Run ````npm install```` to install all the required dependencies into your local repo.
3. Change the ipAddress variable to your local computer's ip address
4. Run ````expo start```` in order to start up the front-end on the emulator.
5. Clone server repo and enter!
   ```bash
   git clone https://github.com/gerseymour/foodease-server.git
   cd foodease-server/server
   ```
6. Run ````npm install```` to install all the required dependencies into your local repo.
7. Create an environment file to the env template specifications.
8. Run ````nest start````  from the sever root in order to start up the back-end.
9. Populate menu database based on the Menu.json in client to the ````/menu```` POST request in postman
10. App should be fully functional :star:

## Features
 - Users can log in and creat an account.
 - Users can select from other users to send a predetermined group of foods to thier friend.
 - User can swipe yes or no on the food wheather they are interested in them or not.
 - User's friend will receive the same menu list and will swipe left and right too.
 - When both users have completed their menu decisions a common dish will appear for them.
 - Thus helping disputing friend/couples decide what to eat.

## Future Features [trello](https://trello.com/b/hq4TKWON/project) [design](https://www.figma.com/file/uxMzT2qkHqiJ1bgAAxfmKh/Foodease?node-id=5676%3A43)

 - Refactor API client
 - Adding/searching for friends 
 - Push notifications 
 - Allow users to add thier own menus


## Technologies
  <code><img height="40" alt="Typescript" src="https://github.com/remojansen/logo.ts/blob/master/ts.png"></code>
  <code><img height="40" alt="ReactNative" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
  <code><img height="40" alt="CSS" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
  <code><img height="40" alt="nestJS" src="https://user-images.githubusercontent.com/61637775/125139677-df766b80-e108-11eb-9d1d-8c6a3754c448.png"></code>
  <code><img height="40" alt="MongoDB" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"></code>
