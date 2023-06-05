#  ![logo](./public/favicon.ico) Tweets

![Fedora](https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

### App with tweet cards and button-click interactivity.
This project was created with
[Create React App](https://github.com/facebook/create-react-app).

__Technology Stack:__ React.js, React-Router-Dom, React-Loader-spinner, React-Redux, Redux-Toolkit, Axios, Styled-Cmponent, GitHub-Pages, MockAPI. <br/>

  
  

## How it works

![How it works](./assets/tweets.png)

1. In the header, you can switch between pages using navigation.
2. You can choose which users to show (All/followed/unfollowed).
3. You can change the following status of the user, the number of his followers will also be changed.
4. 3 users are loaded on the page with each click on the "Next" button.

[ScreenCast](https://drive.google.com/file/d/18NCuH6PcjQYsLj3x-WrKDucd4ZQPg1zP/view?usp=sharing)

## Problems encountered:

The MockAPI service does not return the total number of objects in the collection, because of this, two requests are made to the server instead of one.

## Project setup

```
npm install
npm run start
```
or
```
yarn
yarn start
```
