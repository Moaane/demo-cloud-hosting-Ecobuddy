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
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { TriangleAlert } from "lucide-react"

export default function Login() {
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    })

    if (res?.error) {
      toast("Wrong password or email", {
        icon: <TriangleAlert />,
      })
    } else {
      router.push("/admin/habit")
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
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

          <div className="flex items-center justify-between">
            <div className="flex items-start space-x-2">
              <Checkbox id="remember" className="rounded-lg" />
              <label
                htmlFor="remember"
                className="text-xs font-medium leading-normal peer-disabled:cursor-not-allowed text-text-foreground"
              >
                Remember me
              </label>
            </div>

            <p className="text-xs font-medium leading-normal peer-disabled:cursor-not-allowed text-text-foreground">
              Forgot password?
            </p>
          </div>
          <Button
            type="submit"
            className="py-7 w-full bg-primary-foreground text-primary font-bold rounded-full text-base hover:bg-background border-2 border-transparent hover:border-primary"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  )
}
