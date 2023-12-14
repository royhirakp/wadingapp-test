"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import DatePickerMuiComponent from "./DatePickerMuiComponent";

const WeadingBidayResaptionEngementDateInput = ({
  setValue,
  errors,
  clearErrors,
}: {
  setValue: any;
  errors: any;
  clearErrors: any;
}) => {
  return (
    <>
      <Stack>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
          pr={1}
          pl={1}
          pt={1}
          gap={4}
        >
          <Box width="100%">
            <Typography pb={1} variant="subtitle1">
              Engagement Date :
            </Typography>
            <Box>
              <DatePickerMuiComponent
                errorState={!(errors.engagementDate === undefined)}
                setValue={setValue}
                dateFor="engagementDate"
                errors={errors}
                clearErrors={clearErrors}
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography pb={1} variant="subtitle1">
              Weading Date :
            </Typography>
            <Box>
              <DatePickerMuiComponent
                setValue={setValue}
                dateFor="weadingDate"
                errors={errors}
                errorState={!(errors.weadingDate === undefined)}
                clearErrors={clearErrors}
              />
            </Box>
          </Box>
        </Stack>

        {/* jjss */}

        <Stack
          pt={4}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
          pr={1}
          pl={1}
          gap={4}
        >
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Biday/Baron Date:
            </Typography>
            <Box>
              <DatePickerMuiComponent
                errorState={!(errors.BidayOrBaronDate === undefined)}
                setValue={setValue}
                dateFor="BidayOrBaronDate"
                errors={errors}
                clearErrors={clearErrors}
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Reception Date:
            </Typography>
            <Box>
              <DatePickerMuiComponent
                setValue={setValue}
                dateFor="receptionDate"
                errors={errors}
                errorState={errors.receptionDate}
                clearErrors={clearErrors}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default WeadingBidayResaptionEngementDateInput;
