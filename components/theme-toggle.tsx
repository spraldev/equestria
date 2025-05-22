"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, Stars, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: "light", label: "Day Mode", icon: <Sun className="h-4 w-4" /> },
    { name: "dark", label: "Night Mode", icon: <Moon className="h-4 w-4" /> },
    { name: "celestial", label: "Celestial", icon: <Sparkles className="h-4 w-4" /> },
    { name: "lunar", label: "Lunar", icon: <Stars className="h-4 w-4" /> },
  ]

  const currentTheme = themes.find((t) => t.name === theme) || themes[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
          <motion.div initial={{ rotate: 0 }} animate={{ rotate: mounted ? 360 : 0 }} transition={{ duration: 0.5 }}>
            {currentTheme.icon}
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gradient-to-br from-purple-900 to-blue-900 border-purple-500">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`flex items-center gap-2 text-white hover:bg-white/10 ${theme === t.name ? "bg-white/20" : ""}`}
          >
            {t.icon}
            <span>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
