import { ReactNode } from "react"
import { authConfig } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/admin/sidebar"

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authConfig)

  if (session?.user.role !== "admin") {
    redirect("/")
  }
  return (
     <div className="grid grid-cols-5 w-full h-full">
      <Sidebar
        name={session.user?.name}
        className="col-span-1 h-screen w-full p-2"
      />
      {children}
    </div>
  )
}
