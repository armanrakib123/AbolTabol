import { NextResponse } from "next/server";
import dbconnect, { collectionNameObj } from "@/lib/dbconnect";

export const POST = async (req) => {
  try {
    const body = await req.json();

    const doctorCollection = dbconnect(collectionNameObj.Patient_Profile);

    const result = await doctorCollection.insertOne(body);

    return NextResponse.json({
      success: true,
      message: "Patient profile saved successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
