"use server";
import dbconnect, { collectionNameObj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export const loginUser_Patient = async ({ email, password }) => {

 
  if (!email || !password) {
    throw new Error("Email or password missing");
  }

  const col = await dbconnect(collectionNameObj.VD_Patient_Auth);
  const user = await col.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }


  if (user.provider === "google") {
    throw new Error("This account uses Google login");
  }

  if (!user.password) {
    throw new Error("Password not set for this account");
  }

  const ok = await bcrypt.compare(password, user.password);

  if (!ok) {
    throw new Error("Invalid password");
  }

  return user;
};
