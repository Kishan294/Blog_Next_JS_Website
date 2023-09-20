import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { dbConnect } from "@/config/dbConfig";

dbConnect();

export const GET = async (request: NextRequest) => {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findById({ _id: userId }).select("-password");
    return NextResponse.json({ message: "User Found", user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
