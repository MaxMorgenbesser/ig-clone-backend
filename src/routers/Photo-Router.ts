import { Router } from "express";
import { Request,Response } from "express";
// import { getAllPhotos } from "../services/photo-services";
import { PhotoServices } from "../services/photo-services";
export const photoRouter = Router()

photoRouter.get('/', async (req:Request,res:Response)=>{
const results = await PhotoServices.getAllPhotos()

res.status(200).send(results)
})

photoRouter.post('/', async (req:Request,res:Response)=>{
    const { photoUrl, description}=req.body
    if (!photoUrl){
        res.status(400).send("photo url is missing")
        return
    }else if (!description){
        res.status(400).send("description is missing")
        return
    }else{
    const insertedId = await PhotoServices.createPhoto({photoUrl,description})
    res.status(200).send(insertedId)
    }

})