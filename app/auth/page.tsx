"use client"

import Login from "@/components/auth/login"
import Register from "@/components/auth/register"
import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useState } from "react"

export default function Page() {
  const [activeTab, setActiveTab] = useState("Register")

  const tabs = [
    {
      name: "Register",
      content: <Register changeTab={setActiveTab} />,
    },
    {
      name: "Login",
      content: <Login />,
    },
  ]

  return (
    <div className="h-screen">
      <Navbar />
      <div className="w-full h-full grid lg:grid-cols-2">
        <div className="hidden relative lg:block">
          <Image
            src="/signup-bg.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
        </div>

        <Tabs
          defaultValue={tabs[0].name}
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-sm m-auto w-full flex flex-col items-center gap-4"
        >
          <TabsList className="p-0 h-auto bg-foreground gap-1 w-full rounded-2xl overflow-clip">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.name}
                value={tab.name}
                className="data-[state=active]:bg-primary-foreground data-[state=active]:text-primary py-4 w-full rounded-2xl"
              >
                <p className="font-medium tracking-wide">{tab.name}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className="w-full">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>

        {/* Background Image */}
      </div>
    </div>
  )
}
