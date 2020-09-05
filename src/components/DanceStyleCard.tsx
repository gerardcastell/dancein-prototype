import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

interface Props {
  title?: string;
  color?: "red" | "blue";
}

const useStyles = makeStyles({
  root: {},
  background: {
    position: "relative",
    height: "70px",
    width: "70px",
    backgroundColor: "#d6d6d6",
    borderRadius: "32%",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    height: "70px",
    width: "70px",
  },
  image: {
    objectPosition: "center",
    height: "60px",
  },
  text: {
    textAlign: "center",
    color: (props: Props) => (props.color ? props.color : "green"),
  },
});

const DanceStyleCard = (props: Props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {/* <div className={classes.imageContainer}></div> */}
      <div className={classes.background}>
        <img
          src={require("../assets/logo512.png")}
          alt='logo'
          className={classes.image}
        />
      </div>

      <Typography className={classes.text}>{props.title}</Typography>
    </div>
  );
};

export default DanceStyleCard;
