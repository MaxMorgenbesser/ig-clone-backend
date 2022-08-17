import { Photo } from "../models/photo";
import {db} from '../db/db'

interface PhotoServices{
    updateLikes(id:string, inc:number):Promise<Photo>
    createPhoto(photo:Photo):Promise<string>
    createComment(id:string, comment:string):Promise<Photo>
    getAllPhotos():Promise<Photo>
}


const photoCollections = db.collection<Photo>("photos");

export const getAllPhotos= async():Promise<Photo[]>=>{
 const photos = await photoCollections.find().toArray()

 return photos
}