"use client";
import React from "react";
import { FormControlLabel } from "@mui/material";
import MuiCheckbox from "@mui/material/Checkbox";

const Checkbox = (props) => {
  const { label, checked, name, ...rest } = props;
  return (
    <FormControlLabel
      classes={{
        root: {
          paddingLeft: 10,
          marginRight: 0,
          display: "block",
          textIndent: -42,
          marginLeft: 30,
        },
      }}
      control={
        <MuiCheckbox
          onChange={props.handleChange}
          disableRipple
          checked={checked}
          name={name}
          classes={{ root: { padding: 0, marginRight: 20 } }}
        />
      }
      label={label}
      {...rest}
    />
  );
};
export default Checkbox;
