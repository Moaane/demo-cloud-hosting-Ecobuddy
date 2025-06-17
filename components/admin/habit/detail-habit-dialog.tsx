import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Habit } from "@/lib/generated/prisma"
import { DynamicIcon, IconName } from "lucide-react/dynamic"
import { ReactNode } from "react"

export default function DetailHabitDialog({
  habit,
  children,
}: {
  habit: Habit
  children: ReactNode
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="aspect-square p-2 h-9 w-9 bg-primary-foreground flex items-center justify-center rounded-full">
            <DynamicIcon
              name={habit.icon as IconName}
              className="h-6 w-6 text-primary"
            />
          </div>

          <AlertDialogTitle className="text-2xl font-bold tracking-tight text-text flex items-center justify-between">
            {habit.title}
            <span className="text-xs font-normal text-text-foreground min-w-fit">
              +{habit.points} Points
            </span>
          </AlertDialogTitle>

          <AlertDialogDescription className="!mt-3 text-[15px]">
            {habit.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end">
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
