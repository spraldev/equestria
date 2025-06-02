"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, MapPin, Scroll, Sparkles, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import PledgeModal from "@/components/pledge-modal"
import ImageCarousel from "@/components/image-carousel"
import { useState, useEffect } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay?: number
}

export default function Home() {
  const [isPledgeOpen, setIsPledgeOpen] = useState(false)
  const [hasAcceptedPledge, setHasAcceptedPledge] = useState(false)

  useEffect(() => {
    const pledgeStatus = localStorage.getItem("hasAcceptedPledge")
    setHasAcceptedPledge(pledgeStatus === "true")
  }, [])

  const handlePledgeAccept = () => {
    localStorage.setItem("hasAcceptedPledge", "true")
    setHasAcceptedPledge(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">The Communist Utopia of Equestria</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Where manufacturing powers progress and equality is our strength
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <ImageCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 justify-center max-w-6xl mx-auto"
        >
          <FeatureCard
            title="Our Country"
            description="Discover the industrial districts and manufacturing centers of Equestria"
            icon={<MapPin className="h-8 w-8 text-purple-200" />}
            href="/our-country"
            delay={0.1}
          />
          <FeatureCard
            title="Economy"
            description="Learn about our magical manufacturing system"
            icon={<Sparkles className="h-8 w-8 text-purple-200" />}
            href="/economy"
            delay={0.2}
          />
          <FeatureCard
            title="Chat with Ponies"
            description="Engage with our dedicated commune members and learn about equality"
            icon={<MessageCircle className="h-8 w-8 text-purple-200" />}
            href="/chatwithponies"
            delay={0.3}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">National Pride</h2>
            <p className="text-white/80">Honor our nation's industrial heritage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">National Anthem</h3>
              <p className="text-white/80 mb-4">
                coming soon!
              </p>
              <audio controls className="w-full" src="/placeholder-audio.mp3">
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Pledge of Unity</h3>
              <p className="text-white/80 mb-4">
                Take the sacred pledge to uphold the values of manufacturing, equality, and communist principles.
              </p>
              <Button
                onClick={() => setIsPledgeOpen(true)}
                className="w-full bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700"
              >
                {hasAcceptedPledge ? "View Pledge" : "Take the Pledge"}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Diplomatic Relations</h2>
            <p className="text-white/80">
              {hasAcceptedPledge 
                ? "Establish trade relations with Equestria"
                : "You must take the Pledge of Unity before establishing diplomatic relations"}
            </p>
          </div>

          <Link 
            href={hasAcceptedPledge ? "/diplomatic-relations" : "#"} 
            className="block"
            onClick={(e) => {
              if (!hasAcceptedPledge) {
                e.preventDefault()
                setIsPledgeOpen(true)
              }
            }}
          >
            <Button 
              variant="outline" 
              className={`w-full border-white/20 ${
                hasAcceptedPledge 
                  ? "bg-white/5 text-white hover:bg-white/20" 
                  : "bg-white/5 text-white/50 cursor-not-allowed"
              }`}
            >
              {hasAcceptedPledge ? "Request Trade Agreement" : "Take the Pledge First"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <PledgeModal 
        open={isPledgeOpen} 
        onOpenChange={setIsPledgeOpen} 
        onAccept={handlePledgeAccept}
        hasAccepted={hasAcceptedPledge}
      />
    </div>
  )
}

function FeatureCard({ title, description, icon, href, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.3, duration: 0.5 }}
    >
      <Link href={href} className="block h-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full hover:bg-white/20 transition-colors">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
