"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import PackegeCard from "./PackegeCard";

const PackegeDetails = ({
  register,
  setValue,
  errors,
  clearErrors,
}: {
  register: any;
  setValue: any;
  errors: any;
  clearErrors: any;
}) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedPackege, setSelectedPackege] = React.useState<{
    title: string;
    Description: string[];
    price: string;
  }>({ title: "", Description: [], price: "" });
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }} p={1}>
        <Typography variant="subtitle1" pb={1} fontWeight={700}>
          Select Packege:
        </Typography>

        {/*  */}

        {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
        <Box sx={{ minWidth: 120 }} flex={1}>
          <Select
            error={!(errors.nameOfThePackege === undefined)}
            // {...register("SelectPackegeType")}
            value={selectedValue}
            onChange={(i, j) => {
              setSelectedValue(i.target.value);
              setValue("SelectPackegeType", i.target.value);
              clearErrors("nameOfThePackege");
            }}
            displayEmpty
            // inputProps={{ "aria-label": "Without label" }}
            sx={{ borderRadius: "0", height: "40px" }}
            fullWidth
          >
            <MenuItem value="">
              <em>Select Your Packege</em>
            </MenuItem>
            <MenuItem value={"Single side"}>Single side</MenuItem>
            <MenuItem value={"Both side"}>Both side</MenuItem>
          </Select>
        </Box>
      </Box>
      {selectedPackege.title === "" ? (
        ""
      ) : (
        <>
          <Stack direction="row">
            <Typography pl={1}>
              <Typography
                component="span"
                variant="h5"
                sx={{ fontWeight: 700 }}
                pr={1}
              >
                Packege:{" "}
              </Typography>
            </Typography>
            <Stack pt={1}>
              <Typography
                component="span"
                variant="h6"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                {selectedPackege.title},{" "}
                <Typography pl={2} display="inline-block">
                  {" "}
                  &#8377; {selectedPackege.price}
                </Typography>
              </Typography>
              <Typography
                component="span"
                variant="h6"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                Description:
              </Typography>
              {selectedPackege.Description.map((item, i) => {
                return (
                  <Typography
                    key={i}
                    component="span"
                    variant="body1"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: "10px",
                        paddingRight: "2px",
                      }}
                      color="primary"
                    />{" "}
                    {item}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
        </>
      )}
      <Stack
        sx={{
          display: `${selectedValue === "" ? "none" : "flex"}`,
          justifyContent: "space-evenly",
          // padding: "40px 10px",
        }}
      >
        {selectedValue === "Single side" ? (
          <>
            <SingleSidePackegeCardContainer
              setSelectedValue={setSelectedValue}
              selectedPackege={selectedPackege}
              setSelectedPackege={setSelectedPackege}
              setValue={setValue}
            />
          </>
        ) : (
          <>
            <BothSidePackegeCardContainer
              setSelectedValue={setSelectedValue}
              selectedPackege={selectedPackege}
              setSelectedPackege={setSelectedPackege}
              setValue={setValue}
            />
          </>
        )}
      </Stack>
    </>
  );
};

const BothSidePackegeCardContainer = ({
  setSelectedValue,
  selectedPackege,
  setSelectedPackege,
  setValue,
}: {
  setSelectedValue: any;
  selectedPackege: any;
  setSelectedPackege: any;
  setValue: any;
}) => {
  return (
    <>
      <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
        {[
          {
            Description: [
              "1 Day Pre/Post Wedding Photoshoot.",
              "All Events Photography & Traditional HD Videography (Conditions Apply on Events) Delivered With One Pendrive.",
              "2 Photographer and 2 Videographer will Be Provided On The Main Wedding Day Event",
              "2 Album With NTR 20 Pages...",
              // "All Photos Of The whole Event will Be Provided Colourgraded...",
            ],
            title: "Standerd",
            price: "55,000.00",
          },
          {
            Description: [
              "2 Day Prewedding/Postwedding Photoshoot.",
              "All Events Photography & Traditional HD Videography (Conditions Apply on Events) Delivered With One Pendrive.",
              "2 Photographer and 2 Videographer will Be Provided On The Main Wedding Day Event",
              "2 Album With NTR 20 Pages...",
              // "All Photos Of The whole Event will Be Provided Colourgraded...",
            ],
            title: "Classic",
            price: "65,000.00",
          },
          {
            Description: [
              "2 Day Prewedding/Postwedding Photoshoot.",
              "All Events Photography & Traditional HD Videography (Conditions Apply on Events) Delivered With One Pendrive.",
              "2 Photographer and 2 Videographer will Be Provided On The Main Wedding Day Event",
              "2 Album With NTR 20 Pages...",
              // "All Photos Of The whole Event will Be Provided Colourgraded...",
            ],
            title: "Gold",
            price: "75,000.00",
          },
        ].map((item, i) => {
          return (
            <Box key={i}>
              <PackegeCard
                Description={item.Description}
                title={item.title}
                price={item.price}
                setSelectedPackege={setSelectedPackege}
                selectedPackege={selectedPackege}
                setSelectedValue={setSelectedValue}
                setValue={setValue}
              />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};
const SingleSidePackegeCardContainer = ({
  setSelectedValue,
  selectedPackege,
  setSelectedPackege,
  setValue,
}: {
  setSelectedValue: any;
  selectedPackege: any;
  setSelectedPackege: any;
  setValue: any;
}) => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
      {[
        {
          Description: [
            "Full Event Photography And Traditional HD Videography With One Pendrive.",
            "1 Day Prewedding/Postwedding Photoshoot.",
            "1 Album NTR High Glossy 20 Page.",
            "All Photos Of The Whole Event will Be Provided Colourgraded..",
          ],
          title: "Professional",
          price: "35,000.00",
        },
        {
          Description: [
            "Full Event Photography And Traditional HD Videography With One Pendrive.",
            "1 Day Prewedding/Postwedding Photoshoot.",
            "1 Album NTR High Glossy 20 Page.",
            "All Photos Of The Whole Event will Be Provided Colourgraded..",
          ],
          title: "Premium",
          price: "45,000.00",
        },
      ].map((item, i) => {
        return (
          <Box key={i}>
            <PackegeCard
              Description={item.Description}
              title={item.title}
              price={item.price}
              setSelectedPackege={setSelectedPackege}
              selectedPackege={selectedPackege}
              setSelectedValue={setSelectedValue}
              setValue={setValue}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default PackegeDetails;
