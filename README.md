# Zoosh group Movie Application

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn graphql-codegen`

Generates code out of your GraphQL schema.

About [package](https://github.com/dotansimha/graphql-code-generator) for more information.

## Application description

### **Basic details of the app**

Application searchs for Movies by Title, displays related movies, short wikipedia description with link.

### **Search view**

Search input is triggered with search button or enter, empty chars are not triggered. On search application returns found items or no content message. Shows movie items with data fields (title, year, genre).

### **Related view**

Related view page is triggered with 'more' button. Shows related movie items with data fields.

### **Header section**

Header section contains search input and title of the current page.
