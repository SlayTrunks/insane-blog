import connectDB from "../connect"
import Blog from '../model'

export default async function handler(req, res) {
    connectDB()
    if(req.method === "GET"){
        const id = req.query.id
        console.log(id)
       try {
        const user = await Blog.findOne({_id:id})
        res.status(200).json(user)
       } catch (error) {
        res.status(500).send(error)
       }
    }
    if(req.method == "DELETE"){
      const id = req.query.id
      try {
        const user = await Blog.findOneAndDelete({_id:id})
       
      } catch (error) {
        res.send(error)
      }
    }
    if(req.method == "PUT"){
      const id = req.query.id
      try {
        const user = await Blog.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true})
        wiindow.location.href = `/edit/${id}`
        res.navigate(`/edit/${id}`)
      } catch (error) {
        
      }
    }
  else{
    res.status(500).send('error in fdad')
  }
}