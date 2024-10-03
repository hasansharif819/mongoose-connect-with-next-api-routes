import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

// GET all products
export const GET = async (req, { params }) => {
    await dbConnect();
    
    // console.log('params found:', params.productId);

    const id = params.productId;

    try {
        const product = await Product.findById(id); 

        if (!product) {
            console.log('Product not found');
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

// PUT method: Update a product
export const PUT = async (req, { params }) => {
    await dbConnect();
  
    const id = params.productId;
  
    try {
      const product = await Product.findById(id);
  
      if (!product) {
        console.log('Product not found');
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
  
      const body = await req.json();
  
      // Update only the fields provided in the request
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { $set: body }, // $set will only update the provided fields
        { new: true, runValidators: true } // Return the updated document
      );
  
      return NextResponse.json(updatedProduct, { status: 200 });
    } catch (error) {
      console.error('Error updating product:', error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  };


  // DELETE method: Delete a product
export const DELETE = async (req, { params }) => {
    await dbConnect();
  
    const id = params.productId;
  
    try {
      const product = await Product.findById(id);
  
      if (!product) {
        console.log('Product not found');
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
  
      // Delete the product
      await Product.findByIdAndDelete(id);
  
      return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting product:', error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  };