const mongoose= require('mongoose')

const connectDb = async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS  = {
            dbName: 'blogDb',

        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log('connect sucessfully')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb