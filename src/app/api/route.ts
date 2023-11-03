import { NextResponse } from "next/server";

//klo untuk api dia menggunakan async
export async function GET(){
    return NextResponse.json({status: 200, message: "Succes" });
}