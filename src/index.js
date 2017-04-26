import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './Stylesheets/css/Main.css';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App node="default" />
  </MuiThemeProvider>,
  document.getElementById('root')
);
