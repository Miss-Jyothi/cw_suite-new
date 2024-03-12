import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/cw_suite');
    console.log('connected to db');
  } catch (error) {
    console.log('error while connecting db ', error);
  }
}
