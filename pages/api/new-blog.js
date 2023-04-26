const { default: connectDB } = require("./connect")
import Blog from './model'

export default async function handler(req,res){
    connectDB()
    if(req.method === 'POST'){
       try {
       await Blog.create(req.body)

       await res.status(200).json(req.body)
       } catch (error) {
        res.status(400).json({message:'error in post'})
       }
    
       
    }
    else if(req.method === 'GET'){
        try {
            const blogs = await Blog.find({})
            res.status(200).json(blogs)
        } catch (error) {
            res.status(400).json({message:'error in get'})
        }
    }

    else{
        res.json({message:'not post'})
    
    }

}