import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: any;
}

const HomeContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          background: `url(/greenBaground.png)`,
          // background: `url('/j-lee-pXqAMSHIfXs-unsplash.jpg')`,
          width: "100vw",
          height: "100%",
          backgroundSize: {
            xs: "cover",
          },
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          zIndex: "-999",
          opacity: 1,
        }}
      ></Box>
      <Box
        margin="auto"
        maxWidth={1000}
        sx={{
          padding: {
            xs: "0 10px",
            sm: "0 25px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HomeContainer;
