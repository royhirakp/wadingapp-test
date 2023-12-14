import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

const cloudinaryUploader = async (
  file: File,
  tags: string[] = []
): Promise<string> => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const uploadResult: UploadApiResponse = await new Promise(
    (resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          tags,
        },
        (error, result: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      const readableStream = new Readable();
      readableStream.push(buffer);
      readableStream.push(null);

      readableStream.pipe(stream);
    }
  );

  console.log(`-> Stream upload success - ${file.name} at ${uploadResult.url}`);

  return uploadResult.url;
};

export default cloudinaryUploader;
