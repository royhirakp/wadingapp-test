"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DatePickerMuiComponent from "./DatePickerMuiComponent";

const Panakhili = ({
  setValue,
  errors,
  clearErrors,
}: {
  setValue: any;
  errors: any;
  clearErrors: any;
}) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }} p={1}>
          <Typography variant="subtitle1" pb={1}>
            Panakhili :
          </Typography>
          <Box sx={{ minWidth: 120 }} flex={1}>
            <Select
              value={selectedValue}
              onChange={(i, j) => {
                setSelectedValue(i.target.value);
                setValue("panakhili", i.target.value);
              }}
              displayEmpty
              placeholder="hirak"
              label=""
              sx={{
                borderRadius: "0",
                height: "40px",
                padding: 0,
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>Select Your Choice</em>
              </MenuItem>
              {["Both Side", "Bride", "Groom"].map((option, i) => {
                return (
                  <MenuItem
                    key={i}
                    value={option}
                    sx={{
                      padding: "0 0 0 12px",
                      position: "relative",
                      top: 0,
                      margin: 0,
                    }}
                  >
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "23px 0px",
            // maxWidth: "500px",
            margin: "10px auto",
            display: `${selectedValue === "" ? "none" : "flex"}`,
          }}
        >
          <Stack pl={1} pt={3} pb={3} sx={{ width: "100%" }}>
            {selectedValue === "Both Side" ? (
              <>
                <Typography
                  variant="subtitle1"
                  pb={1}
                  // sx={{ fontWeight: 600, color: "#eb5e5e" }}
                  // fontWeight={800}
                >
                  Select Your Panakhili Dates:
                </Typography>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    width: "100%",
                  }}
                  gap={1}
                  flexWrap="wrap"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    direction="column"
                    sx={{
                      width: {
                        xs: "100%",
                        md: "45%",
                      },
                    }}
                  >
                    <Typography variant="h6">Bride</Typography>
                    <Stack sx={{ width: "100%" }}>
                      <DatePickerMuiComponent
                        clearErrors={clearErrors}
                        errorState={false}
                        errors={errors}
                        setValue={setValue}
                        dateFor="panakhiliBrideDate"
                      />
                    </Stack>
                  </Stack>
                  <Stack
                    direction="column"
                    sx={{
                      width: {
                        xs: "100%",
                        md: "45%",
                      },
                    }}
                  >
                    <Typography variant="h6">Groom</Typography>
                    <Stack sx={{ width: "100%" }}>
                      <DatePickerMuiComponent
                        clearErrors={clearErrors}
                        errorState={false}
                        errors={errors}
                        setValue={setValue}
                        dateFor="panakhiliGroomDate"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </>
            ) : (
              <>
                <Stack direction="column" alignItems="center">
                  <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                    <Typography variant="subtitle1" pb={1}>
                      Select Your Panakhili Date:
                    </Typography>
                    <Stack sx={{ width: "100%" }}>
                      <DatePickerMuiComponent
                        clearErrors={clearErrors}
                        errorState={false}
                        errors={errors}
                        setValue={setValue}
                        dateFor="panakhiliDate"
                      />
                    </Stack>
                  </Box>
                </Stack>
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Panakhili;
