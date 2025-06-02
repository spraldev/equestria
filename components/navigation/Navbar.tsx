"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Equestria
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/chatwithponies">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat with Ponies
              </Button>
            </Link>
            <Link href="/diplomatic-relations">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">
                Diplomatic Relations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 