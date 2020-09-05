import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

interface Props {
  title?: string;
  color?: "red" | "blue";
}

const useStyles = makeStyles({
  root: {},
  background: {
    position: "absolute",
    top: "1rem",
    left: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "#d6d6d6",
    borderRadius: "32%",
    zIndex: -1,
  },
  imageContainer: {
    position: "relative",
    height: "70px",
    width: "70px",
  },
  image: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
  },
  text: {
    paddingTop: "1rem",
    textAlign: "center",
    textTransform: "capitalize",
    color: (props: Props) => (props.color ? props.color : "green"),
  },
});

const DanceStyleCard = (props: Props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={require("../assets/logo512.png")}
          alt='logo'
          className={classes.image}
        />
        <div className={classes.background}></div>
      </div>

      <Typography className={classes.text}>{props.title}</Typography>
    </div>
  );
};

export default DanceStyleCard;
