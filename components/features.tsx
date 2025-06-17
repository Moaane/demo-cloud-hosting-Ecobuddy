import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  BookCheck,
  ChartPie,
  Dice2,
  Dices,
  FolderSync,
  Newspaper,
  Recycle,
  RefreshCcw,
  Sword,
  Swords,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: RefreshCcw,
    title: "Habit & Tracking",
    description:
      "Build Better Habits — Track and grow your eco-lifestyle with personalized, visual progress.",
    image: "/gamification.jpg",
  },
  {
    icon: Newspaper,
    title: "Daily News",
    description:
      "Stay Informed Daily — Get curated insights and green tips delivered fresh every day.",
    image: "/gamification.jpg",
  },
  {
    icon: Swords,
    title: "Gamification",
    description:
      "Make It Fun — Earn points, unlock rewards, and stay motivated on your green journey.",
    image: "/gamification.jpg",
  },
  {
    icon: Dices,
    title: "Challenge",
    description:
      "Grow Together — Join themed challenges, set personal goals, and win eco-rewards.",
    image: "/gamification.jpg",
  },
  {
    icon: Recycle,
    title: "Recycle",
    description:
      "Find & Recycle Smarter — Discover nearby recycling spots and navigate with ease.",
    image: "/gamification.jpg",
  },
]

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto text-text">
        Smarter Tools for a Greener Tomorrow
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border border-transparent rounded-xl overflow-hidden shadow-none bg-foreground hover:bg-card hover:border-primary transition-colors duration-300"
          >
            <CardHeader>
              <feature.icon className="text-primary" />
              <h4 className="!mt-3 text-xl font-bold tracking-tight text-text">
                {feature.title}
              </h4>
              <p className="mt-1 text-text-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0 h-52 ml-6 rounded-tl-xl relative overflow-hidden">
              <Image src={feature.image} alt={feature.title} fill objectFit="cover"/>
              {/* <div className="bg-muted h-52 ml-6 rounded-tl-xl" /> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Features
