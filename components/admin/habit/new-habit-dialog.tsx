"use client"
import { useState } from "react"
import { Check, ChevronsUpDown, icons, Plus } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn, toKebabCase } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const iconNames = Object.keys(icons)

const formattedIcons = iconNames.map((name) => ({
  value: name,
  label: name,
}))

export default function NewHabitDialog() {
  const [isCreateHabitOpen, setIsCreateHabitOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const router = useRouter()

  const formSchema = z.object({
    title: z.string().min(1, "Habit title is required"),
    points: z
      .string()
      .min(1, "Points is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Points must be a positive number",
      }),
    description: z.string().min(1, "Habit description is required"),
    icon: z.string().min(1, "Habit icon is required"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      points: "",
      description: "",
      icon: "",
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const kebabIcon = toKebabCase(data.icon)

      const dataToSend = {
        ...data,
        points: Number(data.points),
        icon: kebabIcon,
      }

      const res = await fetch("/api/habit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })

      if (res.ok) {
        toast("Habit has been created")
        form.reset()
        router.refresh()
        setIsCreateHabitOpen(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog open={isCreateHabitOpen} onOpenChange={setIsCreateHabitOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-5 w-5" /> Create Habit
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-background border-slate-700 text-white">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Create New Habit</DialogTitle>
              <DialogDescription className="text-slate-400">
                Add a new habit for users to track.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Habit name"
                        className="w-full bg-foreground rounded-full text-text text-lg py-4 px-5 font-bold"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="points"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Points"
                        className="w-full bg-foreground rounded-full text-text text-lg py-4 px-5 font-bold"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Habit Description"
                        className="w-full bg-foreground rounded-2xl text-muted-foreground text-lg font-bold h-32"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between py-4 px-5 bg-foreground text-muted-foreground font-bold hover:bg-foreground hover:text-muted-foreground w-full"
                          >
                            {field.value
                              ? formattedIcons.find(
                                  (icon) => icon.value === field.value
                                )?.label
                              : "Select icon"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 rounded-2xl overflow-hidden">
                        <Command>
                          <CommandInput
                            placeholder="Search icon..."
                            className="h-9 bg-foreground text-text"
                          />
                          <CommandList>
                            <CommandEmpty>No icon found.</CommandEmpty>
                            <CommandGroup>
                              {formattedIcons.map((icon) => (
                                <CommandItem
                                  key={icon.value}
                                  value={icon.value}
                                  onSelect={() => {
                                    form.setValue("icon", icon.value)
                                  }}
                                >
                                  {icon.label}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      field.value === icon.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCreateHabitOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Create Habit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
