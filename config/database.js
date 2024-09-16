import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // if the db is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected')
    return;
  }

  // connect to the DB
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected=true;
  } catch (err) {
    console.log(err)
  }
}

export default connectDB;
