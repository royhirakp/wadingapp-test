"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

const BrideContact = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <Box pt={2}>
        <Typography variant="h5" fontWeight={700} pl={1}>
          <b>Bride Contact Details:</b>
        </Typography>

        <Stack
          pb={3}
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
              Name :
            </Typography>
            <Box>
              <TextField
                placeholder="Bride Name"
                fullWidth
                {...register("brideName", {
                  require: true,
                  pattern: /^[A-Za-z\s]+$/,
                })}
                error={!(errors.brideName === undefined)}
                sx={{
                  borderRadius: 0,
                  ".MuiInputBase-root": {
                    borderRadius: 0,
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Address:
            </Typography>
            <Box>
              <TextField
                {...register("brideAddress", {
                  require: true,
                })}
                error={!(errors.brideAddress === undefined)}
                placeholder="Bride Address"
                fullWidth
                sx={{
                  borderRadius: 0,
                  ".MuiInputBase-root": {
                    borderRadius: 0,
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Box>
        </Stack>
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
            <Typography variant="subtitle1" pb={1}>
              Email :
            </Typography>
            <Box>
              <TextField
                error={!(errors.brideEmail === undefined) || false}
                {...register("brideEmail", {
                  require: true,

                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                })}
                placeholder="Bride Email"
                fullWidth
                sx={{
                  borderRadius: 0,
                  ".MuiInputBase-root": {
                    borderRadius: 0,
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Phone No :
            </Typography>
            <Box>
              <TextField
                {...register("bridePhone")}
                error={!(errors.bridePhone === undefined)}
                // helperText="Phone no sould be number and length should be 10"
                {...register("bridePhone", {
                  require: true,
                  maxLength: 10,
                  pattern: /^[0-9]+$/i,
                })}
                placeholder="Bride Phone"
                fullWidth
                type="text"
                sx={{
                  borderRadius: 0,
                  ".MuiInputBase-root": {
                    borderRadius: 0,
                    height: "40px",
                  },
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default BrideContact;
