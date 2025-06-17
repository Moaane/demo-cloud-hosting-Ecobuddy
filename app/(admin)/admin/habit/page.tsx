import EmptyAlert from "@/components/empty-alert"
import HabitTable from "./table"
import NewHabitDialog from "@/components/admin/habit/new-habit-dialog"
import { Card } from "@/components/ui/card"
import prisma from "@/lib/prisma"

export default async function Page() {
  const habits = await prisma.habit.findMany()
  return (
    <div className="mx-2 mt-6 col-span-4 space-y-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl text-text font-bold">Habit Management</h1>
        <NewHabitDialog />
      </div>

      <Card className="bg-foreground border-slate-700 p-2">
        {habits.length > 0 ? <HabitTable habits={habits} /> : <EmptyAlert />}
      </Card>
    </div>
  )
}
