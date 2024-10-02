import { NextRequest, NextResponse } from "next/server"


export const GET = async() => {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}

export const POST = async() => {
  return NextRequest.json({ message: 'Hello from Next.js!' })
}