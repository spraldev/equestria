"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import AIChatModal from "@/components/ai-chat-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Country", href: "/our-country" },
    { name: "Economy", href: "/economy" },
    { name: "Maps", href: "/maps" },
    { name: "Diplomatic Relations", href: "/diplomatic-relations" },
  ]

  return (
    <nav className="bg-purple-900/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-xl">Equestria</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
            >
              <Button
                onClick={() => setIsAIChatOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Equestrian AI
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setIsAIChatOpen(true)}
              size="icon"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Sparkles className="h-4 w-4" />
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-purple-200 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-purple-900/90 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:bg-purple-800 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <AIChatModal open={isAIChatOpen} onOpenChange={setIsAIChatOpen} />
    </nav>
  )
}
