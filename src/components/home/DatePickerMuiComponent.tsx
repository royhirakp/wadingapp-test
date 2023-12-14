"use client";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/joy";

const DatePickerMuiComponent = ({
  dateFor,
  setValue,
  errorState,
  clearErrors,
}: {
  dateFor: any;
  setValue: any;
  errors: any;
  errorState: Boolean;
  clearErrors: any;
}) => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer sx={{ borderRadius: 0 }} components={["DatePicker"]}>
          <DatePicker
            onChange={(event: any, i) => {
              clearErrors(`${dateFor}`);
              let selectedDate =
                event?.$D + "-" + (event?.$M + 1) + "-" + event?.$y;
              setValue(dateFor, selectedDate);
            }}
            sx={{
              color: "red",
              width: "100%",
              ".MuiInputBase-root": {
                borderRadius: 0,
              },

              ".MuiOutlinedInput-notchedOutline": {
                border: `1px solid ${errorState ? "red" : "none"}`,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerMuiComponent;
