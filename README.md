# POKEMON APP

## Table of contents

- [Live Preview](#live-preview)
- [DEMO](#demo)
- [Description](#description)
- [How to use](#how-to-use)
- [Technologies and methodologies used](#technologies-and-methodologies-used)
- [API](#api)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Live Preview

![pokemon-app-demo](https://user-images.githubusercontent.com/55362061/106355108-4b50de80-62f6-11eb-9714-04fe49963258.gif)

## DEMO

https://sendersk.github.io/pokemon-app-react/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Application allows to browse pokemons based on external API, which is implemented with use of Axios. Application contains search filter. When you start typing the name of the pokemon, the list is filtered and as a result you get the names of the pokemon containing the entered phrase.

## How to use

1. Write the Pokemon name in Search field.
2. Click on the button **Search** or press **Enter** to search a Pokemon.
3. You could also choose one from list below by clicking **View**.
4. When you get bored of scrolling through the list, you can quickly return to the top of the page by clicking the arrow button.
5. If the pokemon you are looking for exists you will get the details.
6. Details will be shown on the dedicated page.
7. To go back to the home page click the **Home** button.

## Technologies and methodologies used

- React
- create-react-app
- Redux with react-redux
- React Router Dom
- React Icons
- React Loadingg
- Redux Thunk
- Axios
- Lodash
- Hooks
- HTML
- CSS
- JavaScript ES6+
- npm

## API

All the Pokemon data are coming from:
https://pokeapi.co/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
