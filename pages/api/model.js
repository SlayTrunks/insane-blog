import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})
mongoose.models = {}
export default mongoose.models.Blog || mongoose.model('Blog',schema)