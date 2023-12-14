"use client";
import { Box, Stack, Typography } from "@mui/joy";
import React from "react";
import Alert from "@mui/material/Alert";
const AlartMessege = ({
  openSingAndTandC_warnning,
}: {
  openSingAndTandC_warnning: any;
}) => {
  return (
    <Stack
      sx={{
        width: "100%",
        top: "5px",
        zIndex: "900",
        display: `${!openSingAndTandC_warnning ? "none" : "flex"}`,
        // transform:''
        translate: "transformY(100px)",
      }}
      direction="row"
      justifyContent="center"
    >
      <Box position="fixed" mt={3} m={5} zIndex={50}>
        <Alert
          severity="warning"
          color="error"
          sx={{
            backgroundColor: "rgb(246 235 220)",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            fontSize: {
              xs: "15px",
              sm: "17px",
              md: "22px",
            },
            ".MuiSvgIcon-root": {
              color: "rgb(187,126, 35)",
              margin: {
                xs: "0 auto",
                sm: "auto 0",
              },
            },
            ".MuiPaper-root": {
              //   fontSize: "2.5rem",
            },
            boxShadow: "10px 20px 20px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography>
            signature required, and kindly review our T&C.
          </Typography>
        </Alert>
      </Box>
    </Stack>
  );
};

export default AlartMessege;
