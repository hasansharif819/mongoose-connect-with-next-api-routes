import { NextRequest, NextResponse } from "next/server"
import dbConnect from "../../lib/dbConnect"
import Product from "../../models/Product";


export const GET = async() => {
    await dbConnect();
    try {
        const products = await Product.find({})
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

// export const POST = async() => {
//   return NextRequest.json({ message: 'Hello from Next.js!' })
// }