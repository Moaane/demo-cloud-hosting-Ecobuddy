import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { title, description, points, icon } = await req.json()

    const udpatedHabit = await prisma.habit.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        points,
        icon,
      },
    })

    revalidatePath("/admin/habit")

    return NextResponse.json(udpatedHabit, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "failed to update habit" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.habit.delete({ where: { id: id } })

    revalidatePath("/admin/habit")

    return NextResponse.json({ message: "habit deleted" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "failed to delete habit" },
      { status: 500 }
    )
  }
}
