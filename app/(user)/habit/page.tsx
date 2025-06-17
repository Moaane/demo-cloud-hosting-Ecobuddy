import HabitPill from "@/components/user/habit/habit-pill"
import { Plus } from "lucide-react"

export default function Page() {
  return (
    <section className="col-span-4 m-2 grid grid-cols-2 grid-rows-3 gap-4">
      <div className="col-span-2 row-span-1 bg-card-foreground rounded-2xl"></div>
      <div className="col-span-2 row-span-2 p-2 space-y-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-text text-xl font-bold">On Going Habit</h1>
          <div className="flex items-center justify-center p-2 bg-primary-foreground text-primary rounded-full group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Plus className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <HabitPill
            title="Use Recycle Bag"
            description="muhaha"
            iconName="shopping-bag"
            points={255}
          />
        </div>
      </div>
    </section>
  )
}
