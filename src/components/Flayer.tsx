import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "yellow",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "0 2rem",
  },
  image: {
    objectFit: "contain",
    objectPosition: "center",
    height: "100%",
    width: "100%",
  },
});

export const Flayer = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item xs={11}>
        <div className={classes.imageContainer}>
          <img
            src={require("../assets/logo512.png")}
            alt="logo"
            className={classes.image}
          />
        </div>
      </Grid>
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained">
          alo
        </Button>
        <Button className={classes.button} variant="contained">
          asd
        </Button>
      </div>
    </Grid>
  );
};
