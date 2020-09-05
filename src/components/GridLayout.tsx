import React from "react";
import Grid from "@material-ui/core/Grid";
import { DanceStyles } from "./DanceStyles";
export default () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item container xs={8}>
          <Grid item xs={2}>
            <DanceStyles></DanceStyles>
          </Grid>
          <Grid item container direction='column' xs={5}>
            Header
          </Grid>
          <Grid item container direction='column' xs={5}>
            Header
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};
