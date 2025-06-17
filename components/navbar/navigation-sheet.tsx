import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import { Logo } from "./logo"
import { NavMenu } from "./nav-menu"
import Link from "next/link"

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-8" />

        <div className="mt-8 space-y-4">
          <Link href="/signin">
            <Button
              variant="outline"
              className="w-full sm:hidden border-2 border-primary text-primary"
            >
              Sign In
            </Button>
          </Link>
          <Button className="w-full xs:hidden bg-primary-foreground text-primary">
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
