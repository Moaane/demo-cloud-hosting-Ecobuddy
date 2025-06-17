import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DynamicIcon, IconName } from "lucide-react/dynamic"
import { buttonVariants } from "@/components/ui/button"
import { Trash } from "lucide-react"


export default function HabitPill({
  title,
  description,
  points,
  iconName,
}: {
  title: string
  description: string
  points: number
  iconName: IconName
}) {
  return (
    <div className="col-span-1 bg-foreground flex items-center px-4 py-4 rounded-full gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="aspect-square p-2 bg-primary-foreground flex items-center justify-center rounded-full">
            <DynamicIcon name={iconName} className="h-6 w-6 fill-primary" />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="aspect-square p-2 h-9 w-9 bg-primary-foreground flex items-center justify-center rounded-full">
              <DynamicIcon name={iconName} className="h-6 w-6 fill-primary" />
            </div>

            <AlertDialogTitle className="text-2xl font-bold tracking-tight text-text flex items-center justify-between">
              {title}
              <span className="text-xs font-normal text-text-foreground">
                +{points} Points
              </span>
            </AlertDialogTitle>

            <AlertDialogDescription className="!mt-3 text-[15px]">
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-between">
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
            >
              <Trash /> Delete
            </AlertDialogAction>

            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-text font-medium select-none">{title}</p>
        <p className="text-text-foreground text-xs select-none">
          {points} Points
        </p>
      </div>
    </div>
  )
}
