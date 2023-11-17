"use client";
import React from "react";
import MuiDialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Typography } from "@mui/material";

const Dialog = (props) => {
  const theme = useTheme();
  const {
    children,
    title,
    id,
    open,
    actionPosition,
    scrollOption,
    actions,
    divider,
    headerChildren,
    ...rest
  } = props;

  return (
    <MuiDialog
      classes={{
        paper: { borderWidth: 0, boxShadow: "0px 20px 50px #00000029" },
      }}
      open={open}
      scroll={scrollOption || "body"}
      id={id}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose(event, reason);
        }
      }}
      {...rest}
    >
      <Grid container direction="column" sx={{ padding: "40px" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: "20px" }}
        >
          <Grid item>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
          </Grid>
          {headerChildren && <Grid item>{headerChildren}</Grid>}
        </Grid>
        {divider && <Divider sx={{ mb: 20 }} />}
        <Grid item xs classes={{ root: { marginBottom: "50px" } }}>
          {children}
        </Grid>
        <Grid
          container
          item
          sx={{ mt: 3 }}
          xs={12}
          justifyContent={
            actionPosition === "right" ? "flex-end" : "flex-start"
          }
          classes={{
            root: {
              "&>:not(:first-child)": {
                marginLeft: "20px",
              },
              [theme.breakpoints.down("400")]: {
                "& :first-child": {
                  minWidth: "100%",
                },
                "&>:not(:first-child)": {
                  marginLeft: 0,
                  marginTop: "20px",
                  minWidth: "100%",
                },
              },
            },
          }}
        >
          {actions}
        </Grid>
      </Grid>
    </MuiDialog>
  );
};

export default Dialog;
