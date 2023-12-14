"use client";
import { Box, CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface ContainerProps {
  children: ReactNode;
}

const ThemeProvidor: React.FC<ContainerProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Dancing Script"].join(","),
      subtitle1: {
        fontSize: "1.2rem",
        fontWeight: 700,
        "@media (min-width:600px)": {
          fontSize: "1.2rem",
        },
        "@media (min-width:960px)": {
          fontSize: "1.4rem",
        },
        "@media (min-width:1280px)": {
          fontSize: "1.4rem",
        },
      },
      h5: {
        fontSize: "1.6rem",
        fontWeight: 700,
        "@media (min-width:600px)": {
          fontSize: "1.6rem",
        },
        "@media (min-width:960px)": {
          fontSize: "1.8rem",
        },
        "@media (min-width:1280px)": {
          fontSize: "1.9rem",
        },
      },
    },
    palette: {
      primary: {
        main: "#437C17",
        light: "#ffff",
        dark: "#f6aeba",
      },

      background: {
        default: "#eae8eb",
        paper: "#fffafb",
      },
    },

    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#437C17",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#476232",
            padding: "10px 30px",
            "&:hover": {
              backgroundColor: "#2d3f20",
            },
            textTransform: "none",
            color: "#ffff",
          },
        },
      },
    },
  });
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default ThemeProvidor;
