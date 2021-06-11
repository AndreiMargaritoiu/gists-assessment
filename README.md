# Github Gists API assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using TypeScript as programming language.

```
npx create-react-app gists-assessment --template typescript
```

## How to run the app

```
npm i
npm start
```

## Dependencies

```
typescript -> adding the benefits of typed variables
react-router-dom -> used for navigation
styled-components -> make the css easier to build and to read, removing the problems with class names and DOM priority
axios -> used to obtain a promise based HTTP client
moment -> used to parse timestamps in the desired format
```

## Structure

```
src/
  components/  -> to not have huge page files and to make the code more reusable, some parts of code are grouped into components
  domain/  -> includes the necessary interfaces to build this app
  pages/  -> contains the 3 avaialable pages with their corresponding styled files
  router/  -> files necessary for managing the routes
  services/
    AxiosService.ts  -> contains the setup for axios CRUD requests
    HttpApiService.ts  -> manage the API calls
  utils/
    Context.ts  -> used to have a global context where services can be called
    theme.tsx  -> includes styles used inside the css files (fonts, colors, media queries)
  App.tsx
  index.tsx
```

## Why

- TypeScript
  - (+) optional static typing, reduce the number of bugs, makes the code more readable, better support for object-oriented programming techniques
  * (-) needs to be compiled, harder to pick up for a beginner
- StyledComponents
  - (+) loads only the reuqired css, no class name bugs, easier management of css code, simple dynamic styling, no globally scoped selectors
  * (-) slower for the browser to read

## Why not

- Redux
  - (+) global state management, reducing the number of API calls, better code architecture, increased testing capabilities
  * (-) a lot of boilerplate code
    -> Conclusion: did not feel the need for adding this kind of complexity to the project since we only have to make some specific requests based on username or gistId

## Improvements

- more suitable design to integrated a better user experience
- improved user interfaces
- split the pages into multiple reusable components
- adding a global page layout to better manage the entire app's design
- adding unit tests for components
- adding redux for a better state management
- add support for smaller devices

## Available Scripts

In the project directory, being pre-added at the initial setup, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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
