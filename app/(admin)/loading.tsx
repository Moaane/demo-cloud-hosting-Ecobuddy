import Spinner from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="col-span-4 h-full w-full flex justify-center items-center">
      <Spinner />
    </div>
  )
}
