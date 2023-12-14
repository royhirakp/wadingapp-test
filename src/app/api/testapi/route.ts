import Marriages from "@/database/Modals/Marriage";
import cloudinaryUploader from "@/lib/uploader";
import { connect } from "@/database/connect";
import {
  CreateMarriageDataDto,
  ImageType,
  mapToMarriageDataType,
} from "@/types/MarriageData.types";
import { NextResponse, type NextRequest } from "next/server";
import marriageDataSchema from "@/resolvers/marriageDataResolver";

export const dynamic = "force-dynamic";

export const POST = async (req: NextRequest) => {
  try {
    await connect();
    const data: any = await req.formData();

    const signature = data?.get("signature");
    const marriageData: CreateMarriageDataDto = JSON.parse(data?.get("data"));

    // console.log({
    //   signature: !!signature,
    //   marriageData: !!marriageData,
    // });

    let signatureImage: ImageType;

    if (!signature || !marriageData) {
      throw new Error("signature or marriageData is missing");
    }

    // validate signature and marriageData
    if (typeof signature !== "object" || signature?.name === "") {
      throw new Error("signature is not a file");
    }
    await marriageDataSchema.validate(marriageData, { abortEarly: false });

    // upload signature image
    try {
      // const url = await cloudinaryUploader(signature, ["signature"])
      signatureImage = {
        name: signature.name,
        url: "https://res.cloudinary.com/de9dp9pv6/image/upload/v1702394425/qfdnauqmp99u2rabowcx.png",
      };
    } catch (error) {
      // console.log(error);
      throw new Error("signature upload failed");
    }

    // create final marriage data to save in database
    const finalMarriageData = mapToMarriageDataType(
      marriageData,
      signatureImage
    );

    // check if marriage data already exists
    let startTime = new Date();
    const existingMarriageData = await Marriages.findOne({
      brideEmail: finalMarriageData.brideEmail,
      groomEmail: finalMarriageData.groomEmail,
      weadingDate: finalMarriageData.weadingDate,
    });
    // console.log(existingMarriageData);
    // console.log((new Date().getTime() - startTime.getTime()).toLocaleString());

    if (existingMarriageData) {
      return NextResponse.json(
        {
          message: "Marriage Data already exists, update it instead",
          ok: false,
        },
        { status: 409 }
      );
    }

    // save marriage data to database
    let startTime2 = new Date();
    const newMerriageData = await Marriages.create(finalMarriageData);
    await newMerriageData.save();
    // console.log((new Date().getTime() - startTime2.getTime()).toLocaleString());

    return NextResponse.json(
      {
        message: "success",
        ok: true,
        data: newMerriageData,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: error.message ?? "Validation Error",
          errors: error.errors ?? [],
          ok: false,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: error?.message ?? "Internal Server Error",
        ok: false,
      },
      { status: 500 }
    );
  }
};
