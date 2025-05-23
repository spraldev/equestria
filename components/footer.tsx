"use client"

import Link from "next/link"
import { Info } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"

function FooterContent() {
  const [showInfoModal, setShowInfoModal] = useState(false)

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center text-white/90 text-sm">
        <span>© 2025 website developed by </span>
        <Link 
          href="https://spral.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mx-1 text-white hover:text-purple-200 underline underline-offset-4 transition-colors"
        >
          spral
        </Link>
        <span> (spursh)</span>
        <button
          onClick={() => setShowInfoModal(true)}
          className="ml-2 text-white/80 hover:text-white transition-colors"
        >
          <Info className="h-4 w-4" />
        </button>
      </div>

      <Modal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title="Inspiration"
        description="Original idea for a country website by Tunezia"
      >
        <div className="space-y-4 text-white/80">
          <p>
            This website was inspired by the creative concept of Tunezia, a musical country website.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://tunezia.mjt-gifts.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 underline underline-offset-4 transition-colors"
            >
              Visit Tunezia
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-purple-600/90 via-indigo-500/90 to-blue-500/90 backdrop-blur-2xl border-t border-white/10 py-4 mt-auto shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]">
      <FooterContent />
    </footer>
  )
} 