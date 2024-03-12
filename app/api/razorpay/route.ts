import { NextRequest, NextResponse } from 'next/server';
// export async function GET(){
//     return NextResponse.json({
//         hello: "world",
//     })
// }
// export async function POST(request: Request){
//     const data = await request.json();
//     return NextResponse.json({
//         data,
//     });
// }

const Razorpay = require('razorpay');
const shortid = require('shortid');

import { NextApiResponse } from 'next';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_SECRET
});

// Define your static values here

export async function POST(req: NextRequest, res: NextApiResponse) {
  // Validate request method (only POST allowed, but not strictly required for this static case)
  const data = await req.json();
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const receipt = shortid.generate();
  const values = {
    amount: data.amount,
    currency: data.currency,
    receipt
  };
  console.log(values);

  try {
    const response = await razorpay.orders.create({
      amount: values.amount * 100, // Convert to paise
      currency: values.currency,
      receipt: values.receipt
    });
    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
}
