
import { cn } from "@/lib/utils"
import { Loader } from "lucide-react"
import { ComponentProps } from "react"

export function LoadingSpinner({
  className,
  ...props
}: ComponentProps<typeof Loader>) {
  return <Loader className={cn("animate-spin h-4 w-4", className)} {...props} />
}
