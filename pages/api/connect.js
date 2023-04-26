const mongoose = require('mongoose')


const connectDB = async () => {
   mongoose.connect('mongodb+srv://slaytrunks:1234@insaneblog.i63wwun.mongodb.net/insaneblog?retryWrites=true&w=majority')
   .then(console.log('Connected to MongoDB')).catch('error in connection')
}
export default connectDB