"use client";

import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

const GroomContact = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <Box pt={1}>
        <Typography variant="h5" pl={1} fontWeight={600}>
          Groom Contact Details:
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
                {...register("groomName", {
                  require: true,
                  pattern: /^[A-Za-z\s]+$/,
                })}
                error={!(errors.groomName === undefined)}
                placeholder="Groom Name"
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
            <Typography pb={1} variant="subtitle1">
              Address:
            </Typography>
            <Box>
              <TextField
                {...register("groomAddress", {
                  require: true,
                })}
                error={!(errors.groomAddress === undefined)}
                placeholder="Groom Address"
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
            <Typography pb={1} variant="subtitle1">
              Email :
            </Typography>
            <Box>
              <TextField
                // onChange={(e) => {
                //   console.log(e.target.value);
                // }}
                error={!(errors.groomEmail === undefined) || false}
                {...register("groomEmail", {
                  require: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                })}
                placeholder="Groom Email"
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
            <Typography pb={1} variant="subtitle1">
              Phone No :
            </Typography>
            <Box>
              <TextField
                error={!(errors.groomPhone === undefined)}
                // helperText="Phone no sould be number and length should be 10"
                {...register("groomPhone", {
                  require: true,
                  maxLength: 10,
                  pattern: /^[0-9]+$/i,
                })}
                placeholder="Groom Phone"
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

export default GroomContact;
