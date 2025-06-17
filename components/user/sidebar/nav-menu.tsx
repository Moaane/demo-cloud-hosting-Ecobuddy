"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu"
import clsx from "clsx"
import { Dices, House, Recycle, RefreshCcw } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname()

  const links = [
    { label: "Home", href: "/home", icon: <House className="w-5 h-5" /> },
    {
      label: "Habit",
      href: "/habit",
      icon: <RefreshCcw className="w-5 h-5" />,
    },
    {
      label: "Challenge",
      href: "/challenge",
      icon: <Dices className="w-5 h-5" />,
    },
    {
      label: "Recycle",
      href: "/recycle",
      icon: <Recycle className="w-5 h-5" />,
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <NavigationMenu {...props} className="h-fit w-full max-h-fit">
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {links.map(({ label, href, icon }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className={clsx(
                  "flex justify-center items-center w-44 gap-2 py-3 rounded-full text-sm",
                  isActive(href)
                    ? "bg-gradient-to-r from-primary to-primary-foreground text-text"
                    : "bg-primary-foreground text-primary border border-transparent hover:border-primary "
                )}
              >
                {icon} {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
