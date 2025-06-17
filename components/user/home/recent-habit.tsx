"use client"
import clsx from "clsx"
import { ArrowUpRight, BadgeCheck, Footprints, ShoppingBag } from "lucide-react"
import { useRef, useState } from "react"
import { useDraggable } from "react-use-draggable-scroll"

export default function RecentHabit() {
  const divRef = useRef<HTMLDivElement>(null)
  const { events } = useDraggable(
    divRef as React.MutableRefObject<HTMLElement>,
    {
      activeMouseButton: "Left",
    }
  )

  return (
    <div
      {...events}
      ref={divRef}
      className="col-span-1 row-span-1 bg-card-foreground rounded-2xl max-h-[calc(50vh-1rem)] overflow-y-scroll scrollbar-hide"
    >
      <div className="flex items-center justify-between sticky top-0 z-50 bg-card-foreground py-6 px-6">
        <h1 className="text-text text-xl font-bold">Recent Habit</h1>
        <div className="flex items-center justify-center p-2 bg-primary-foreground text-primary rounded-full group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      {/* Habit Cards Container */}
      <div className="space-y-4 px-6 pb-2">
        <HabitCard
          title="Use Recycle Bag"
          points="+25 Points"
          icon={ShoppingBag}
        />
        <HabitCard
          title="Go for a Walk"
          points="+15 Points"
          icon={Footprints}
        />
      </div>
    </div>
  )
}

function HabitCard({
  title,
  points,
  icon: Icon,
}: {
  title: string
  points: string
  icon: React.ElementType
}) {
  const [active, setActive] = useState(false)

  function handleActive() {
    setActive(!active)
  }

  return (
    <div
      onClick={handleActive}
      className="flex gap-4 min-h-32 rounded-2xl overflow-hidden bg-foreground transition-all duration-500"
    >
      <div
        className={clsx(
          "flex justify-center items-center rounded-r-2xl transition-all duration-500",
          active
            ? "flex-grow bg-primary"
            : "bg-primary-foreground aspect-square h-32"
        )}
      >
        <Icon
          className={clsx(
            "h-12 w-12 text-black fill-primary stroke-1",
            active && "hidden"
          )}
        />

        <div
          className={clsx(
            "flex-col items-center gap-2 text-black",
            active ? "flex" : "hidden"
          )}
        >
          <p className="text-base font-medium select-none">{title}</p>
          <p className="text-xs select-none flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 fill-primary" /> Completed
          </p>
        </div>
      </div>

      <div
        className={clsx(
          "col-span-2 justify-start items-center",
          active ? "hidden" : "flex"
        )}
      >
        <div className="flex flex-col gap-1">
          <p className="text-base text-text font-medium select-none">{title}</p>
          <p className="text-text-foreground text-xs select-none">{points}</p>
        </div>
      </div>
    </div>
  )
}
