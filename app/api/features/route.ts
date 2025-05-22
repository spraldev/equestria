import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const featured = await prisma.decloration.findMany({
            where: {
                features: true
            }
        })

        return NextResponse.json(featured)
    } catch (error) {
        return NextResponse.json(
            {
              message: "Internal server error",
            },
            { status: 500 }
          )
    }
}