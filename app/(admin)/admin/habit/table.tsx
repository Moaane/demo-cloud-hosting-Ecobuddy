"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react"
import { DynamicIcon, IconName } from "lucide-react/dynamic"
import { Habit } from "@/lib/generated/prisma"
import { Button } from "@/components/ui/button"
import DeleteHabitDialog from "@/components/admin/habit/delete-habit-dialog"
import UpdateHabitDialog from "@/components/admin/habit/update-habit-dialog"
import DetailHabitDialog from "@/components/admin/habit/detail-habit-dialog"

export default function HabitTable({ habits }: { habits: Habit[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-slate-700">
          <TableHead className="text-slate-300">Habit Name</TableHead>
          <TableHead className="text-slate-300">Description</TableHead>
          <TableHead className="text-slate-300">Points</TableHead>
          <TableHead className="text-slate-300">Icon</TableHead>
          <TableHead className="text-slate-300">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {habits.map((habit) => (
          <TableRow key={habit.id} className="border-slate-700">
            <TableCell className="font-medium text-white">
              {habit.title}
            </TableCell>
            <TableCell className="text-slate-300 line-clamp-1 max-w-[300px] overflow-hidden text-ellipsis">
              {habit.description}
            </TableCell>
            <TableCell className="text-primary font-bold">
              {habit.points}
            </TableCell>
            <TableCell className="text-primary font-bold">
              <DynamicIcon name={habit.icon as IconName} />
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4 text-text" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-slate-800 border-slate-700"
                >
                  <DropdownMenuLabel className="text-slate-300">
                    Actions
                  </DropdownMenuLabel>
                  <DetailHabitDialog habit={habit}>
                    <DropdownMenuItem
                      className="text-slate-300"
                      onSelect={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                  </DetailHabitDialog>

                  <UpdateHabitDialog habit={habit}>
                    <DropdownMenuItem
                      className="text-slate-300"
                      onSelect={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Habit
                    </DropdownMenuItem>
                  </UpdateHabitDialog>
                  <DropdownMenuSeparator className="bg-slate-700" />

                  <DeleteHabitDialog habitId={habit.id}>
                    <DropdownMenuItem
                      className="text-red-400"
                      onSelect={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Habit
                    </DropdownMenuItem>
                  </DeleteHabitDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
