import { dbConnect } from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
// import jwt from "jsonwebtoken";

dbConnect();

export const POST = async (request: NextRequest) => {
  try {
    const { username, email, password } = await request.json();

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    // Send email for verification
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    return NextResponse.json(savedUser, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
