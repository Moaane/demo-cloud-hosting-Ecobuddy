import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CirclePlay } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl text-text">
          <Badge className="rounded-full py-1 border-none bg-primary-foreground text-primary">
            Just released v1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Meet your new buddy for green lifestyle
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Discover simple, effective ways to live more sustainably. From
            everyday habits to bigger changes, your green lifestyle journey
            starts here — with your new eco-friendly buddy.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base hover:bg-primary-foreground hover:text-primary"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none  text-primary border-2 border-primary hover:bg-transparent hover:border-white"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-rounded-xl aspect-square">
          <Image
            src="/hero-mockup.png"
            fill
            alt=""
            className="object-cover rounded-xl rotate-6"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
