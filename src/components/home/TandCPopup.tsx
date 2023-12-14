"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Moon_Dance,
  Luckiest_Guy,
  Caveat,
  Dhurjati,
  Roboto,
} from "next/font/google";
const inter = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "700",
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "85%",
    sm: "70%",
    md: 700,
  },
  bgcolor: "background.paper",
  // border: "2px solid #000",

  borderRadius: "5px",
  boxShadow: 24,
  p: {
    xs: 3,
    sm: 4,
    md: 4,
  },
};

export default function TandCPopup({
  setT_and_c_ckeckboxStacus,
  checkSing_and_TandCisTrue_or_Fls,
  setopenSingAndTandC_warnning,
  watch,
}: {
  setT_and_c_ckeckboxStacus: any;
  checkSing_and_TandCisTrue_or_Fls: any;
  setopenSingAndTandC_warnning: any;
  watch: any;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack direction="row">
        <FormControlLabel
          onClick={(e: any) => {
            setT_and_c_ckeckboxStacus(e.target.checked);
            // checkSing_and_TandCisTrue_or_Fls();
            console.log("checkboxx clicked", watch("signature"));
            // jodi image prest thate abd checkbok e.tsrhget.value == true hoy the
            // setopenSingAndTandC_warnning(false)
            // else setopenSingAndTandC_warnning(true)
            if (watch("signature") && e.target.checked) {
              console.log("image present and checkbox true");
              setopenSingAndTandC_warnning(false);
            }
          }}
          control={<Checkbox />}
          label=""
          sx={{ margin: 0 }}
        />

        <Typography
          onClick={handleOpen}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          I have read and agreed to the
          <Typography
            component="span"
            color="error"
            pl={1}
            sx={{ textDecoration: "underline" }}
          >
            Terms & Conditions
          </Typography>
        </Typography>
      </Stack>
      <Modal open={open} sx={{ padding: 0 }}>
        <Box sx={style}>
          <Stack direction="row" justifyContent="space-between" pt={1} pb={1}>
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.8rem",
                  md: "1.9rem",
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              Terms & Conditions
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <ContentOfTandC />
        </Box>
      </Modal>
    </Box>
  );
}

const data = [
  {
    title: " Retainer and Payment",
    decribtion: `  Client shall reserve the time and date of services by advance
  paying 5K of the total photography fee. No date is reserved
  until the contract and retainer (advence) are received. The
  balance due for the photography ser- vices must be paid in 2
  Instalments. Clients have to clear payments on the last day of
  events and 5k will be remains as final payment which have to
  pay during delivery of album and video. Client fails to remit
  payment as specified, the Photographer shall have the right to
  immediately terminate this Agreement with no further
  obligation, retain any monies already paid.`,
  },

  {
    title: "Cancellation",
    decribtion:
      "If for any reason Client cancels this contract before the wedding date, Photographer will keep the booking amount. Cancellation must be made in writing or sent via clints own E-mail or Whatsapp. in future when events will be held then booking amount will added if clints inform us 30 days before event.",
  },
  {
    title: "Reschedule",
    decribtion:
      "In the event that Client reschedules the wedding and Photographer is able to rebook the original wedding date, Client will receive credit for all monies already paid. A new contract may be required. The new package price will reflect pricing in effect when the date change occurs. In the event that Client reschedules the wedding and Photographer is not able to rebook the original wedding date, Client forfeits the re- tainer but will receive a credit for all other monies paid. Credit may be applied to wed- ding coverage within one year of original date provided Photographer is available.",
  },

  {
    title: "Liability",
    decribtion:
      "If Photographer or his agent is unable to perform any or all of the duties herein for any reason, including but not limited to, fire, transportation problems, acts of God, accident, illness, or technical problems, and if she cannot provide another competent professional, all money received by Photographer, minus expenses, will be returned to Client, and Photographer shall have no further liability with respect to this agreement. This limitation of liability also applies to any loss/damage of photographs or failure to deliver photographs for any reason.",
  },

  {
    title: "Products",
    decribtion:
      "Upon receipt of a photos and video files, Client accepts all responsibility for archiving and protecting the photographs. Photographer does not permanently archive image files. Photographer is not responsible for the lifespan of any digital media provid- ed or for any future changes in digital technology or media readers that might result in an inability to read discs provided. It is Client's responsibility to make sure that digital files are copied to new media as required.",
  },

  {
    title: "Responsibilities",
    decribtion:
      "Unless agreed upon in advance, we shall be the exclusive photogra- pher retained for the event. We may bring one assistant at his discretion. Friends, family, guests must not obstruct or interfere on our works. Wedding guests may take photos, but it is the responsibility of Client to prevent family and friends from interfering with our duties. Photographer is not responsible for compromised coverage due to causes beyond his control such as other people's camera or flash, the lateness of the bride, groom, family members and bridal party members or other principles, weather condi- tions, schedule complications, rendering of decorations, or restrictions of the venues or officiate. Photographer is not responsible for existing backgrounds or lighting conditions which may negatively impact or restrict the photography coverage.    ",
  },
  {
    title: "Coverage",
    decribtion:
      "Photographer will provide coverage for the dates, locations and continuous hours specified in this Agreement. Additional travel or coverage hours may be added by agreement on the wedding day and must be paid in full before any photos or products are released to the Client.",
  },

  {
    title: "Image Processing/Printing:",
    decribtion:
      "After delivery of all photos clint should provide selected photos(album) with in 30 days .after clints provide all selected photos(album) we started work on video and album.We will take less than 45 days to deliver all the products. Photographers will provide only products specified in agreement. Requests for extra products will be decline. If clients requests for extra products they should must pay new products prices before delivery. Lastly we do not promise to give home delivery.",
  },

  {
    title: "Video Processing",
    decribtion:
      "You can select songs and soundtracks for HD videos. You have to have to give us song selection list between 15 days after reception. Otherwise we will edit video with our selected song list. Once video created, no other changes can be made.",
  },
];
const ContentOfTandC = () => {
  return (
    <>
      <Stack
        sx={{
          height: {
            xs: "60vh",
          },
        }}
        overflow="auto"
        className={`${inter.variable}`}
      >
        {data.map((item, i) => {
          return (
            <Stack key={i} direction="column" pb={3}>
              <Box fontFamily="roboto">
                <Typography
                  variant="subtitle2"
                  fontFamily="roboto"
                  fontWeight={700}
                >
                  <FiberManualRecordIcon
                    sx={{
                      color: "#000",
                      fontSize: "10px",
                      paddingRight: "2px",
                    }}
                  />{" "}
                  {item.title}:
                </Typography>{" "}
                <Typography variant="body2" fontFamily="roboto" pl={2}>
                  {item.decribtion}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};
