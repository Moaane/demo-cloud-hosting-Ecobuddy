"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Register({
  changeTab,
}: {
  changeTab: (tab: string) => void
}) {
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      console.info("Registering user:", data)
      console.info("Response status:", res.status)

      if (res.ok) {
        changeTab("Login")
      } else {
        console.error("Failed to register")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-w-full">
      <Form {...form}>
        <form
          className="w-full space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Email"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-foreground rounded-full text-text text-lg py-4 px-5 font-bold"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="rounded-lg" />
              <label
                htmlFor="terms"
                className="text-xs font-medium leading-normal peer-disabled:cursor-not-allowed text-text-foreground"
              >
                I accept and agree to comply with EcoBuddy{" "}
                <span className="font-bold">Terms and Condition</span>
                and <span className="font-bold">Privacy policy</span>
              </label>
            </div>
          </div>
          <Button
            type="submit"
            className="py-7 w-full bg-primary-foreground text-primary font-bold rounded-full text-base hover:bg-background border-2 border-transparent hover:border-primary"
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  )
}
