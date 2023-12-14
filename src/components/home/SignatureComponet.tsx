import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import FileUplode from "@/components/home/FileUplode";
const SignatureComponet = ({
  register,
  setValue,
  watch,
  t_and_c_ckeckboxStacus,
  setopenSingAndTandC_warnning,
}: {
  setValue: any;
  register: any;
  watch: any;
  t_and_c_ckeckboxStacus: any;
  setopenSingAndTandC_warnning: any;
}) => {
  return (
    <>
      <Stack
        pl={1}
        pr={1}
        pt={3}
        direction="row"
        justifyContent="space-between"
        minHeight={100}
      >
        <Stack direction="row" gap={1}>
          <Image
            src="/WhatsApp Image 2023-12-12 at 16.41.47_bb7bfae9.jpg"
            style={{ border: "1px solid" }}
            width={100}
            height={60}
            alt=""
          />
          <Image
            src="/IMG_6452.png"
            style={{ border: "1px solid" }}
            width={100}
            height={60}
            alt=""
          />
        </Stack>
        <FileUplode
          watch={watch}
          register={register}
          setValue={setValue}
          t_and_c_ckeckboxStacus={t_and_c_ckeckboxStacus}
          setopenSingAndTandC_warnning={setopenSingAndTandC_warnning}
        />
      </Stack>
    </>
  );
};

export default SignatureComponet;
