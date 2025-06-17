import { Button } from "@/components/ui/button"
// import { Logo } from "./logo"
// import { NavigationSheet } from "./navigation-sheet"
import Link from "next/link"
import { NavMenu } from "./nav-menu"
import { cn } from "@/lib/utils"

const Sidebar = ({
  name,
  className,
}: {
  name: string | null | undefined
  className?: string
}) => {
  return (
    <nav
      className={
        (cn(`h-screen w-full border-b border-primary`, className),
        className)
      }
    >
      <div className="h-full flex flex-col bg-card-foreground rounded-2xl px-4 py-6 sm:px-4 gap-8 text-text">
        {/* <Logo /> */}
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 bg-white rounded-full" />
          <div>
            <p className="text-xs">Welcome Back</p>
            <p className="text-sm font-bold capitalize line-clamp-1">{name ?? ""}</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <NavMenu orientation="vertical" className="hidden md:block " />

        <div></div>
        {/* <div className="md:hidden"><NavigationSheet /></div> */}
      </div>
    </nav>
  )
}

export default Sidebar
