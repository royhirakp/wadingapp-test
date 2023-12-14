"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function AlartComponent({
  messege,
  state,
  setState,
}: {
  messege: string;
  state: any;
  setState: any;
}) {
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={messege}
        key={vertical + horizontal}
        sx={{ fontSize: "1.9rem" }}
      />
    </Box>
  );
}
