const mongoose = require('mongoose');

const connect = async () =>{
    try{
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to the database');
    }
    catch(err){
        console.log(err);
        console.log(`Unable to connect to the database`)
    }
}

export default connect;