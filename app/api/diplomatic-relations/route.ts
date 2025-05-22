import { NextResponse } from "next/server"
import { z } from "zod"
import prisma from "@/lib/prisma"

const declarationTypes = ["trade", "resource", "manufacturing", "alliance", "war"] as const

const formSchema = z.object({
  nation: z.string().min(2, "Nation name must be at least 2 characters"),
  representative: z.string().min(2, "Representative name must be at least 2 characters"),
  declarationType: z.enum(declarationTypes, {
    required_error: "Please select a declaration type",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = formSchema.parse(body)

    const declaration = await prisma.decloration.create({
      data: validatedData
    })

    // Special handling for war declarations
    if (validatedData.declarationType === "war") {
      console.warn(`WAR DECLARATION RECEIVED from ${validatedData.nation}`)
      // TODO: Implement war declaration handling logic
    }

    return NextResponse.json(
      {
        message: validatedData.declarationType === "war" 
          ? "War declaration received. Prepare for the consequences."
          : "Declaration received successfully",
        data: validatedData,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Invalid form data",
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    console.error("Error processing declaration:", error)
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    )
  }
} 