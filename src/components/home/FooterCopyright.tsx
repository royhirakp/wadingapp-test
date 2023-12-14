import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const FooterCopyright = () => {
  return (
    <Box>
      <Divider />
      <Typography variant="body1" textAlign="center" pt={3} pb={2}>
        © Copyright 2023. Stackkaroo.com
      </Typography>
    </Box>
  );
};

export default FooterCopyright;
