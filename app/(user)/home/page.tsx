import RecentHabit from "@/components/user/home/recent-habit"

export default async function DashboardPage() {
  return (
    <section className="col-span-4 m-2 grid grid-cols-2 grid-rows-2 gap-4">
      <RecentHabit />
      <div></div>

      <div className="col-span-2 row-span-1 bg-card-foreground"></div>
    </section>
  )
}
