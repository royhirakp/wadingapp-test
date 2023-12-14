export type CreateMarriageDataDto = {
  dateOfFillTheForm: string;

  brideName: string;
  bridePhone: string;
  brideEmail: string;
  brideAddress: string;
  panakhiliBrideDate: string;
  asirbadBrideDate: string;
  haldiBrideDate: string;

  groomName: string;
  groomAddress: string;
  groomEmail: string;
  groomPhone: string;
  haldiGroomDate: string;
  asirbadGroomDate: string;
  panakhiliGroomDate: string;

  receptionDate: string;
  engagementDate: string;
  weadingDate: string;
  bidayOrBaronDate: string;
  asirbadDate: string;
  panakhiliDate: string;
  haldiDate: string;

  anythingExtra: string;

  asirbad: string;
  panakhili: string;
  haldi: string;

  nameOfThePackege: {
    title: string;
    Description: string[];
    price: string;
  };
  selectPackegeType: string;
};

export type MarriageDataType = CreateMarriageDataDto & {
  signature: ImageType;
  status?: "pending" | "approved" | "rejected";
};

export type ImageType = {
  url: string;
  name: string;
};

export type updateMarriageDataDto = {
  id: string;

  brideName?: string;
  bridePhone?: string;
  // brideEmail?: string;
  brideAddress?: string;
  panakhiliBrideDate?: string;
  asirbadBrideDate?: string;
  haldiBrideDate?: string;

  groomName?: string;
  groomAddress?: string;
  // groomEmail?: string;
  groomPhone?: string;
  haldiGroomDate?: string;
  asirbadGroomDate?: string;
  panakhiliGroomDate?: string;

  receptionDate?: string;
  engagementDate?: string;
  weadingDate?: string;
  bidayOrBaronDate?: string;
  asirbadDate?: string;
  panakhiliDate?: string;
  haldiDate?: string;

  anythingExtra?: string;

  asirbad?: string;
  panakhili?: string;
  haldi?: string;

  status?: "pending" | "approved" | "rejected";

  // nameOfThePackege?: {
  //   title: string;
  //   Description: string[];
  //   price: string;
  // };
  // selectPackegeType?: string;
};

export const mapToMarriageDataType = (
  createDto: CreateMarriageDataDto,
  signature: ImageType
): MarriageDataType => {
  return {
    ...createDto,
    signature,
  };
};
