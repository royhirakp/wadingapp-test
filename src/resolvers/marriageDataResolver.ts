import * as yup from "yup";

const marriageDataSchema = yup.object().shape({
  dateOfFillTheForm: yup.string(),
  brideName: yup.string().required(),
  bridePhone: yup.string().required(),
  brideEmail: yup.string().email().required(),
  brideAddress: yup.string(),
  groomName: yup.string().required(),
  groomAddress: yup.string(),
  groomEmail: yup.string().email().required(),
  groomPhone: yup.string().required(),
  anythingExtra: yup.string(),
  engagementDate: yup.string().required(),
  weadingDate: yup.string().required(),
  bidayOrBaronDate: yup.string(),
  // signature: yup.string(),
  receptionDate: yup.string().required(),
  nameOfThePackege: yup.object().shape({
    title: yup.string(),
    Description: yup.array().of(yup.string()),
    price: yup.string(),
  }),
  selectPackegeType: yup.string(),
  asirbadGroomDate: yup.string(),
  asirbadBrideDate: yup.string(),
  asirbad: yup.string(),
  asirbadDate: yup.string(),
  panakhili: yup.string(),
  panakhiliBrideDate: yup.string(),
  panakhiliDate: yup.string(),
  panakhiliGroomDate: yup.string(),
  haldi: yup.string(),
  haldiBrideDate: yup.string(),
  haldiDate: yup.string(),
  haldiGroomDate: yup.string(),
});

export default marriageDataSchema;
