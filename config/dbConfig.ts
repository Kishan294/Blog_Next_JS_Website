import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI!, {
      dbName: "Nextjs_Auth",
    });
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    connection.on("error", () => {
      console.log("Database connection failed");
      process.exit();
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
