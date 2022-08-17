import { Photo } from "../models/photo";
import { db } from "../db/db";

interface PhotoServices {
//   updateLikes(id: string, inc: number): Promise<Photo>;
  createPhoto(photo: Photo): Promise<string>;
//   createComment(id: string, comment: string): Promise<Photo>;
  getAllPhotos():Promise<Photo[]>;
}

const photoCollections = db.collection<Photo>("photos");

export const getAllPhotos = async (): Promise<Photo[]> => {
  const photos = await photoCollections.find().toArray();

  return photos;
};

export const createPhoto = async (photo: Photo): Promise<string> => {
  
  try {
    const res = await photoCollections.insertOne(photo);
    return res.insertedId.toString();
  } catch (error) {}
  return 'Something went wrong'
};

// export const updateLikes= async(id:string, inc:number=1) Promise <Photo>=>{

// }

// export const createComment = async (id:string, comment:string): Promise<Photo> => {
//     return 

// }
export const PhotoServices:PhotoServices=
{
    getAllPhotos, 
    createPhoto, }