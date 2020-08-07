import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

interface Props {
  color: "red" | "blue";
  title: string;
}

const useStyles = makeStyles({
  root: {
    height: "100px",
    color: (props: Props) => (props.color ? props.color : "green"),
  },
});

const DanceStyleCard = (props: Props) => {
  const classes = useStyles(props);
  return (
    <div>
      <img src='logo.png' alt='logo' className={classes.root} />
      <Typography>Salsa</Typography>
    </div>
  );
};

export default DanceStyleCard;
