import { CVLayout } from "@/components/cv-layout"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <CVLayout />
    </div>
  )
}

