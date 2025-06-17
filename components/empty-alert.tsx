import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export default function EmptyAlert() {
  return (
    <Alert>
      <TriangleAlert className="h-4 w-4 text-text" />
      <AlertTitle>Data Tidak Ditemukan</AlertTitle>
      <AlertDescription>
        Tidak ada data yang tersedia saat ini. Silakan tambahkan data baru
      </AlertDescription>
    </Alert>
  )
}
