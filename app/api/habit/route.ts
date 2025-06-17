import { authConfig } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const session = await getServerSession(authConfig)
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
  }

  const { title, points, description, icon } = await req.json()

  const habit = await prisma.habit.create({
    data: {
      title,
      points,
      description,
      icon,
    },
  })

  revalidatePath("/admin/habit")

  return NextResponse.json(
    { data: habit, message: "habit created" },
    { status: 201 }
  )
}
