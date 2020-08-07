import React from "react";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  appBar: {
    boxShadow: "none",
  },
  logoContainer: {
    flexGrow: 1,
  },
  logo: {
    height: "50px",
  },
  button: {
    textTransform: "capitalize",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color='transparent' className={classes.appBar} position='static'>
        <Toolbar>
          <div className={classes.logoContainer}>
            <img
              src={require("../assets/logo512.png")}
              alt='logo'
              className={classes.logo}
            />
          </div>
          <Button href='#contained-buttons' className={classes.button}>
            Why dance in?
          </Button>
          <Button href='#contained-buttons' className={classes.button}>
            Contact
          </Button>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            href='#contained-buttons'
          >
            Download the app
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
