import bcrypt from 'bcrypt';
import { User } from 'models/userModels';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from 'utils/connect';
export async function POST(req : NextRequest) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    console.log({ username, email, password });
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return NextResponse.json({ message: 'Username or email already exists.' }, { status: 500 });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(User);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (error) {
    console.log('error while registering user.', error);
    return NextResponse.json({ message: 'Error occured while registering.' }, { status: 500 });
  }
}
