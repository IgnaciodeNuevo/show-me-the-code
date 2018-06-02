# Show Me The Code: Snippet App

## Contributors

- [Ignacio Villanueva](https://github.com/IgnaciodeNuevo)
- [Ismael Navarro](https://github.com/ismaelnavarro)
- [Israel Vilches](https://github.com/ivilches)

## ElectronJS + ReactJS boilerplate

- State management with [Redux]
- Routing with [React-Router v4]
- [React] and [Redux devtools] for debugging
- .eslint for [ESlint]
- [Webpack 3] for bundling
- [Babel] for compiling

## How to
- To run in development mode with hot reloading, open a terminal inside your project and run
    ```bash
    npm run dev
    ```

    This commands creates a webpack dev server which will watch and reload the bundle as you edit and will it available at https://localhost:8080.
    The command will also run the electron app in development mode. So it will open up devtools with React and Redux devtools initialized.
- To build the app and test if it is working:

    ```bash
    npm start
    ```

    This command will compile the app in production mode and start the app. Here is you still toggle the developer tools from the menu and see if there is any errors

- To package the app and create a distributable:

    ```bash
    npm run dist
    ```

    This will create a relevant distributable file. For example, if you are on Windows, it will create a .exe file in the release folder.

[Redux]: <http://redux.js.org/>
[React-Router v4]: <https://reacttraining.com/react-router/>
[React]: <https://github.com/facebook/react-devtools>
[Redux devtools]: <https://github.com/gaearon/redux-devtools>
[Jest]: <https://facebook.github.io/jest/>
[ESlint]: <http://eslint.org/>
[Webpack 3]: <https://webpack.js.org/>
[Babel]: <https://babeljs.io/>
[Yeoman]: <http://yeoman.io/learning/>


