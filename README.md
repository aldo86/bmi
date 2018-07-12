This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a demo project to calculate the Body Mass Index<br>
You can access the Heorkue deployed demo [here](https://gentle-badlands-24224.herokuapp.com/).

## Project Structure

After creation, your project should look like this:

```
bmi/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    Login/
      index.js
      LoginView.js
    Signup/
      index.js
      SignUpView.js
    style.css
    App.js
    base.js
    Home.js
    index.js
    PrivateRoute.js
  .env
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Packages used

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* React.
* React Routwer.
* React Materialize.
* Firebase.


