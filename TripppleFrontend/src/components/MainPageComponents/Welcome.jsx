import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  return (
    <Container sx={{ my: "5rem", ml: "1rem", mr: "1rem" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h3">Комплектующие для любых целей</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;