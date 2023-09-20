import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/config/dbConfig";
import User from "@/models/userModel";

dbConnect();

export const POST = async (req: NextRequest) => {
  try {
    const { token } = await req.json();
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json(
        { status: "error", message: "Invalid or expired token" },
        { status: 400 }
      );
    }
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();
    return NextResponse.json({ status: "success", message: "Email verified" });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
};
