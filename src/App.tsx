import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Homepage from "./views/homepage";
import {
  CssBaseline,
  Typography,
  colors,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
  },
});

let useStyles = makeStyles({
  footer: {
    position: "relative",
    backgroundColor: colors.grey[900],
    height: "40px",
    marginTop: "30px",
  },
  footerContent: {
    position: "absolute",
    top: "25%",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/users">
            <div>Users</div>
          </Route>
        </Switch>
      </Router>
      <footer className={classes.footer}>
        <Typography variant="subtitle2" className={classes.footerContent}>
          Copyright 2020, Rave Arevalo.
        </Typography>
      </footer>
    </ThemeProvider>
  );
}
