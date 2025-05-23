"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Info } from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PledgeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept?: () => void
  hasAccepted?: boolean
}

export default function PledgeModal({ open, onOpenChange, onAccept, hasAccepted }: PledgeModalProps) {
  const [pledgeTaken, setPledgeTaken] = useState(false)

  const handlePledge = () => {
    setPledgeTaken(true)
    if (onAccept) {
      onAccept()
    }
  }

  const handleClose = () => {
    if (pledgeTaken) {
      setPledgeTaken(false)
    }
      onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-gradient-to-br from-purple-900 to-blue-900 border-purple-500 text-white max-w-md max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {hasAccepted ? "Pledge of Harmony" : "Take the Pledge of Harmony"}
          </DialogTitle>
          <DialogDescription className="text-purple-200 text-center">
            {hasAccepted 
              ? "You have already taken the pledge, comrade!"
              : "Join the citizens of Equestria in our sacred pledge"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 -mr-2">
          {!pledgeTaken ? (
            <>
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    IMPORTANT: This is purely for fun! We will NOT use this against you or your country during ANY conference or diplomatic meeting. There are no hidden clauses or fine print - it's just a playful way to show you appreciate our unique culture. Feel free to take it or not, no pressure!
                  </p>
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-white/90 italic text-center whitespace-pre-line">
"I pledge my heart, hoof, and mind to the Communist Utopia of Equestria, homeland of industrial harmony.


I uphold the banner of manufacturing, where every citizen contributes to our collective production.


I will cultivate efficiency as our strongest virtue, more valuable than gold or crowns.


I vow to protect our manufacturing districts, magical resources, and every facility that powers our nation.


I shall innovate, produce, and improve, so that our industrial might forever grows.


I will stand with my comrades against inefficiency, waste, and counter-revolutionary forces.


I promise to give according to ability and receive according to need, in service to our manufacturing goals.


I celebrate the diversity of our production methods, from earth pony strength to unicorn magic.


I honor the memory of the Battle of Rule and Havoc, and will maintain the system it established.


Until the last factory falls silent, I serve Equestria with loyalty, efficiency, and unbreakable unity."
                </p>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="bg-green-500/20 p-3 rounded-full mb-4">
                <Check className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-center">Pledge Accepted!</h3>
              <p className="text-center text-purple-200 mt-2">Welcome to the Communist Utopia of Equestria, comrade!</p>
            </motion.div>
          )}
        </div>

        {!pledgeTaken && (
          <div className="pt-4 mt-4 border-t border-white/10">
            <Button
              onClick={handlePledge}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Take the Pledge
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
