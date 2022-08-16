import express, {Request,Response} from "express";
import cors from 'cors'
import { MongoClient, ServerApiVersion } from 'mongodb'
import { uri } from './credentials'

const client=new MongoClient(uri)
const db=client.db('DamianCluster')
const photoCollections=db.collection("photos")


const app=express()
app.use(cors())
app.use(express.json())

const port = 5001
app.get('/' ,async (req: Request,res: Response)=> {  
    const photos= await photoCollections.find({}).toArray()
res.status(200).send("it works")
})


app.listen(port, ()=>{
    console.log('now listening on port',port)
})