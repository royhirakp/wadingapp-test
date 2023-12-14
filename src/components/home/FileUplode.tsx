"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileUpload({
  setValue,
  watch,
  t_and_c_ckeckboxStacus,
  setopenSingAndTandC_warnning,
}: {
  register: any;
  setValue: any;
  watch: any;
  t_and_c_ckeckboxStacus: any;
  setopenSingAndTandC_warnning: any;
}) {
  const [image, setImage] = React.useState<any>("");

  return (
    <Box display="flex" flexDirection="column">
      {image ? (
        <>
          <Stack direction="column">
            <Box>
              <Image
                src={URL.createObjectURL(image)}
                alt="singnature"
                width={110}
                height={40}
              />
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <Button
            component="label"
            variant="text"
            startIcon={<CloudUploadIcon />}
            sx={{
              backgroundColor: "#ffff",
              border: "1px solid #437C17",
              color: "#437C17",
              padding: {
                xs: 1,
                sm: "5px 14px",
              },
              "&:hover": {
                backgroundColor: "#ffff",
              },
            }}
          >
            Singnature
            <VisuallyHiddenInput
              onChange={(e: any) => {
                console.log("imageeeee lodeddd");
                const file = e.target.files[0];
                setImage(file);
                setValue("signature", file);
                console.log("sing====", watch("signature"));
                if (t_and_c_ckeckboxStacus && watch("signature")) {
                  setopenSingAndTandC_warnning(false);
                }
              }}
              type="file"
            />
          </Button>
        </>
      )}
    </Box>
  );
}
