import { NextResponse } from "next/server"
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


// POST method: Create a new product
export const POST = async (req) => {
  await dbConnect();

  try {
    const body = await req.json();

    const newProduct = new Product({
      name: body.name,
      category: body.category,
      price: body.price,
      quantity: body.quantity,
      description: body.description,
      img: body.img,
    });

    const savedProduct = await newProduct.save();

    return NextResponse.json(savedProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
