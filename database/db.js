import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI= `mongodb://${USERNAME}:${PASSWORD}@ac-wfz0wz0-shard-00-00.ih1ck8i.mongodb.net:27017,ac-wfz0wz0-shard-00-01.ih1ck8i.mongodb.net:27017,ac-wfz0wz0-shard-00-02.ih1ck8i.mongodb.net:27017/?ssl=true&replicaSet=atlas-rwgom3-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', ()=>{
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting to the database ');
    })
} 

export default Connection;