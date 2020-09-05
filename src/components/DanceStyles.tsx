import React from "react";
import Grid from "@material-ui/core/Grid";
import DanceStyleCard from "./DanceStyleCard";

export const DanceStyles = () => {
  function displayDanceStyles(): any {
    return [1, 1, 1, 1].map((_, idx) => (
      <Grid item key={idx}>
        <DanceStyleCard title='hola' color='blue'></DanceStyleCard>
      </Grid>
    ));
  }

  return (
    <Grid container spacing={2} direction='column' alignItems='center'>
      {displayDanceStyles()}
    </Grid>
  );
};
