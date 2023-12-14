"use client";
import HomeContainer from "@/comtainer/HomeContainer";
import React, { useCallback, useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Image from "next/image";
import TandCPopup from "@/components/home/TandCPopup";
import WeadingBidayResaptionEngementDateInput from "@/components/home/WeadingBidayResaptionEngementDateInput";
import PackegeDetails from "@/components/home/PackegeDetails";
import Asirbad from "@/components/home/Asirbad";
import Panakhili from "@/components/home/Panakhili";
import Haldi from "@/components/home/Haldi";
import BrideContact from "@/components/home/BrideContact";
import GroomContact from "@/components/home/GroomContact";
import { useForm } from "react-hook-form";
import AlartMessege from "@/components/home/AlartMessege";
import axios from "axios";
import SignatureComponet from "@/components/home/SignatureComponet";
import { LoadingButton } from "@mui/lab";
import FooterCopyright from "@/components/home/FooterCopyright";

type Inputs = {
  example: string;
  dateOfFillTheForm: string;
  bridePhone: string;
  brideName: string;
  brideEmail: string;
  brideAddress: string;
  groomAddress: string;
  groomEmail: string;
  groomName: string;
  groomPhone: string;
  anythingExtra: string;
  engagementDate: string;
  weadingDate: string;
  BidayOrBaronDate: string;
  signature: string;
  receptionDate: string;
  nameOfThePackege: {
    title: string;
    Description: string[];
    price: string;
  };
  SelectPackegeType: string;
  asirbadGroomDate: string;
  asirbadBrideDate: string;
  asirbad: string;
  asirbadDate: string;
  panakhili: string;
  panakhiliBrideDate: string;
  panakhiliDate: string;
  panakhiliGroomDate: string;
  haldi: string;
  haldiBrideDate: string;
  haldiDate: string;
  haldiGroomDate: string;
  checkboxStatus: Boolean;
  signatureIsPresent: Boolean;
};

const Home = () => {
  const [loaderState, setLoaderState] = useState<Boolean>(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Inputs>({ mode: "onChange" });
  const [date, setDate] = useState<string>("");
  const [openSingAndTandC_warnning, setopenSingAndTandC_warnning] =
    useState<Boolean>(false);
  const [t_and_c_ckeckboxStacus, setT_and_c_ckeckboxStacus] =
    useState<Boolean>(false);

  const checkSing_and_TandCisTrue_or_Fls = useCallback(() => {
    if (watch("signature") && t_and_c_ckeckboxStacus) {
      setopenSingAndTandC_warnning(false);
    } else {
      setopenSingAndTandC_warnning(true);
    }
  }, [t_and_c_ckeckboxStacus, watch]);

  const erorrrrrrr = useCallback(
    (name: any) => {
      if (!watch(name)) {
        setError(name, {
          type: "manual",
          message: `please give your ${name}`,
        });
      } else {
        clearErrors(name);
      }
    },
    [clearErrors, setError, watch]
  );

  const setErrorMessegeForEmptyField = useCallback(() => {
    // groomPhone
    erorrrrrrr("groomPhone");
    erorrrrrrr("groomName");
    erorrrrrrr("groomEmail");
    erorrrrrrr("groomAddress");
    // brie
    erorrrrrrr("bridePhone");
    erorrrrrrr("brideName");
    erorrrrrrr("brideEmail");
    erorrrrrrr("brideAddress");
    // packege
    erorrrrrrr("nameOfThePackege");
    // wngementfaet
    erorrrrrrr("BidayOrBaronDate");
    erorrrrrrr("receptionDate");
    erorrrrrrr("weadingDate");
    erorrrrrrr("engagementDate");
  }, [erorrrrrrr]);

  const apiCall = useCallback(async () => {
    setLoaderState(true);
    try {
      const formData = new FormData();
      let userData = {
        dateOfFillTheForm: watch("dateOfFillTheForm") || "",
        bridePhone: watch("bridePhone") || "",
        brideName: watch("brideName") || "",
        brideEmail: watch("brideEmail") || "",
        brideAddress: watch("brideAddress") || "",
        groomAddress: watch("groomAddress") || "",
        groomEmail: watch("groomEmail") || "",
        groomName: watch("groomName") || "",
        groomPhone: watch("groomPhone") || "",
        anythingExtra: watch("anythingExtra") || "",
        engagementDate: watch("engagementDate") || "",
        weadingDate: watch("weadingDate") || "",
        bidayOrBaronDate: watch("BidayOrBaronDate") || "",
        signature: { name: "RSS", url: "https://agile-rule.name/" },
        receptionDate: watch("receptionDate") || "",
        nameOfThePackege: {
          title: watch("nameOfThePackege").title || "",
          Description: watch("nameOfThePackege").Description || "",
          price: watch("nameOfThePackege").price || "",
        },
        //
        selectPackegeType: watch("SelectPackegeType") || "",
        asirbadGroomDate: watch("asirbadGroomDate") || "",
        asirbadBrideDate: watch("asirbadBrideDate") || "",
        asirbad: watch("asirbad") || "",
        asirbadDate: watch("asirbadDate") || "",
        panakhili: watch("panakhili") || "",
        panakhiliBrideDate: watch("panakhiliBrideDate") || "",
        panakhiliDate: watch("panakhiliDate") || "",
        panakhiliGroomDate: watch("panakhiliGroomDate") || "",
        haldi: watch("haldi") || "",
        haldiBrideDate: watch("haldiBrideDate") || "",
        haldiDate: watch("haldiDate") || "",
        haldiGroomDate: watch("haldiGroomDate") || "",
      };
      formData.append("signature", watch("signature"));
      formData.append("data", JSON.stringify(userData));
      const headers = {
        "Access-Control-Allow-Origin": "*",
      };
      const response = await axios.post("/api/marriageData", formData, {
        headers,
      });
      console.log(response);
    } catch (error) {
      console.log("POST ERROR: ", error);
    }
    setLoaderState(false);
  }, [watch]);

  const onSubmit = (data: any) => {
    if (watch("signature") && t_and_c_ckeckboxStacus) {
      setopenSingAndTandC_warnning(false);
    } else {
      setopenSingAndTandC_warnning(true);
    }
    // error set
    setErrorMessegeForEmptyField();
    // if the signature and the checkbox not true it will return
    if (watch("signature") === undefined || !t_and_c_ckeckboxStacus) {
      return;
    }
    apiCall();
  };
  useEffect(() => {
    //set todays date in the data and show to the fnd

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    setDate(formattedDate);
    setValue("dateOfFillTheForm", formattedDate);
  }, [setValue]);
  return (
    <HomeContainer style={{}}>
      {/*  t and c checkbox and sing mandatory alart */}
      <>
        <AlartMessege openSingAndTandC_warnning={openSingAndTandC_warnning} />
      </>
      <>
        <Website_Logo />
      </>
      <Stack
        sx={{
          gap: {
            xs: 0,
            sm: "8px",
            md: "16px",
          },
          paddingTop: {
            xs: 1,
            md: 2,
          },
        }}
      >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <PackegeDetails
            errors={errors}
            register={register}
            setValue={setValue}
            clearErrors={clearErrors}
          />
          <Asirbad
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
          />
          <Panakhili
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
          />
          <Haldi
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
          />
          <WeadingBidayResaptionEngementDateInput
            errors={errors}
            setValue={setValue}
            clearErrors={clearErrors}
          />
          {/* contact deatils */}
          <Box pt={7}>
            <BrideContact register={register} errors={errors} />
          </Box>
          <Box pt={7}>
            <GroomContact register={register} errors={errors} />
          </Box>

          <Box pt={5}>
            <AnyThingExtraComponent register={register} setValue={setValue} />
          </Box>
          <SignatureComponet
            watch={watch}
            register={register}
            setValue={setValue}
            t_and_c_ckeckboxStacus={t_and_c_ckeckboxStacus}
            setopenSingAndTandC_warnning={setopenSingAndTandC_warnning}
          />
          <Box pl={1}>
            <Typography fontWeight={600}>Date: {date}</Typography>
          </Box>
          <TandCPopup
            watch={watch}
            checkSing_and_TandCisTrue_or_Fls={checkSing_and_TandCisTrue_or_Fls}
            setT_and_c_ckeckboxStacus={setT_and_c_ckeckboxStacus}
            setopenSingAndTandC_warnning={setopenSingAndTandC_warnning}
          />

          <Stack direction="row" justifyContent="center" pt={2} pb={5}>
            <LoadingButton
              variant="contained"
              loading={loaderState === true}
              size="large"
              type="submit"
              sx={{
                padding: "5px 75px",
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.6rem",
                },
                backgroundColor: "#476232",
                "&:hover": {
                  backgroundColor: "#2d3f20",
                },
                textTransform: "none",
                color: "#ffff",
                ".MuiLoadingButton-loadingIndicator": {
                  fontSize: "30px",
                },
              }}
            >
              Submit
            </LoadingButton>
          </Stack>
        </form>
        <FooterCopyright />
      </Stack>
    </HomeContainer>
  );
};

export default Home;

const AnyThingExtraComponent = ({
  register,
}: {
  setValue: any;
  register: any;
}) => {
  return (
    <>
      <Stack pl={1} pr={1} pt={2}>
        <Typography pb={1} variant="subtitle1">
          Anything extra....
        </Typography>
        <TextareaAutosize
          {...register("anythingExtra")}
          maxRows={10}
          minRows={5}
          style={{ margin: "3px", fontSize: "17px", borderRadius: 0 }}
        />
      </Stack>
    </>
  );
};

const Website_Logo = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: {
            xs: 3,
            sm: 5,
          },
        }}
      >
        <Image
          src="/the-wedding-sutra-low-resolution-logo-black-on-transparent-background.png"
          width={900}
          height={100}
          style={{ width: "100%", height: "100%" }}
          alt="website logo"
        />
      </Box>
    </>
  );
};
