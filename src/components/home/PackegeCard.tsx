"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { Button, Paper } from "@mui/material";

import { List, ListItem } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const PackegeCard = ({
  title,
  Description,
  price,
  selectedPackege,
  setSelectedPackege,
  setSelectedValue,
  setValue,
}: {
  title: string;
  Description: string[];
  price: string;
  selectedPackege: any;
  setSelectedPackege: any;
  setSelectedValue: any;
  setValue: any;
}) => {
  return (
    <>
      <Paper
        sx={{
          maxWidth: {
            xs: "300px",
            sm: "300px",
            md: "300px",
          },
          padding: "15%",
          ":hover": {
            boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.1)",
            transform: "scale(1.01)",
          },
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            textAlign="center"
            pb={1}
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontWeight: 600 }}
            // color="#f25c5c"
            color="primary"
            textAlign="center"
          >
            &#8377;{" "}
            <Typography component="span" variant="h6" sx={{ fontWeight: 600 }}>
              {price}
            </Typography>
          </Typography>

          <Typography variant="subtitle2" pb={1}>
            Description :
          </Typography>

          <List
            sx={{
              padding: 0,
              gap: 2,
              margin: 0,
              minHeight: {
                xs: "200px",
                sm: "200px",
                md: "200px",
              },
              ".MuiListItemText-root": {
                margin: 0,
              },
            }}
          >
            {Description.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  sx={{
                    padding: "3px 0",
                  }}
                >
                  <Box mb="auto" pr={1}>
                    <DoneIcon fontSize="small" />
                  </Box>
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              );
            })}
          </List>
          <Stack direction="row" justifyContent="center" pt={2}>
            <Button
              onClick={() => {
                setSelectedPackege({ title, Description, price });
                setSelectedValue("");
                setValue("nameOfThePackege", { title, Description, price });
              }}
              variant="contained"
            >
              Select
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default PackegeCard;
