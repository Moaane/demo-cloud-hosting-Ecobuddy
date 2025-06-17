import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { NavMenu } from "./nav-menu"
import { NavigationSheet } from "./navigation-sheet"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="h-16 bg-foreground border-b border-primary sticky top-0 z-50">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 text-text">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Link href="/auth">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
          </Link>
          <Button className="hidden xs:inline-flex bg-primary-foreground text-primary">
            Get Started
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
