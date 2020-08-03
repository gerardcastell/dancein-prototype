import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import GridLayout from "./components/GridLayout";
import { Header } from "./components/Header";

const useStyles = makeStyles({
  myCustomStyle: {
    fontStyle: "oblique",
    backgroundColor: "red",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <Header></Header>
      <Typography
        className={classes.myCustomStyle}
        variant='h1'
        color='primary'
      >
        Hello
      </Typography>
      <Button variant='contained' color='secondary'>
        Hola Mundo!
      </Button>
      <GridLayout></GridLayout>
    </div>
  );
}
