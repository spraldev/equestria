"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Maximize2, X } from "lucide-react"
import { Modal } from "@/components/ui/modal"

type MapType = "physical" | "political" | "density"

interface MapInfo {
  name: string
  description: string
  image: string
}

const maps: Record<MapType, MapInfo> = {
  physical: {
    name: "Physical Map",
    description: "A detailed topographic map showing Equestria's natural features, including the manufacturing districts, magical resource sites, and strategic locations from the Battle of Rule and Havoc.",
    image: "/IMG_2724.jpg",
  },
  political: {
    name: "Political Map",
    description: "Shows the administrative boundaries of Equestria's communist districts, highlighting the three major trade partners: Crystal Empire, Dragon's Lair, and Canterlot.",
    image: "/IMG_2723.jpg",
  },
  density: {
    name: "Density Map",
    description: "A dot density visualization showing the concentration population.",
    image: "/IMG_2725.jpg",
  },
}

export default function MapsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeMap, setActiveMap] = useState<MapType>("physical")
  const [rotation, setRotation] = useState(270)
  const [showFullImage, setShowFullImage] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Maps of Equestria</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the geographical wonders of our harmonious nation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={handleRotate}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => setShowFullImage(true)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
              <Image
                src={maps[activeMap].image}
                alt={maps[activeMap].name}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transform: `rotate(${rotation}deg)` }}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{maps[activeMap].name}</h2>
                <p className="text-white/90">{maps[activeMap].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Map Types</h2>
            <div className="space-y-3">
              {Object.entries(maps).map(([key, map]) => (
                <Button
                  key={key}
                  variant={activeMap === key ? "default" : "outline"}
                  className={`w-full justify-start ${
                    activeMap === key
                      ? "bg-gradient-to-r from-purple-700 to-blue-600"
                      : "bg-white/5 border-white/20 text-white hover:bg-white/20"
                  }`}
                  onClick={() => {
                    setActiveMap(key as MapType)
                    setRotation(270)
                  }}
                >
                  {map.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">National Geography</h2>

          <div className="prose prose-invert max-w-none text-white">
            <p>
              The Communist Utopia of Equestria spans diverse geographical regions, each contributing to our nation's
              industrial and magical prosperity. From the manufacturing districts to the magical resource sites, our land
              is dedicated to the production of magical building materials and goods that sustain our economy.
            </p>

            <p>
              Our nation maintains strategic trade relations with only three key partners: the Crystal Empire to the north,
              the Dragon's Lair to the east, and Canterlot to the west. These carefully chosen alliances reflect our
              commitment to selective trade and self-sufficiency.
            </p>

            <p>
              The climate of Equestria is carefully managed by our weather teams, ensuring optimal conditions for both
              manufacturing and resource extraction. This planned climate system allows for consistent production of
              magical goods and comfortable working conditions for all citizens.
            </p>

            <p>
              Sixty years ago, our nation was transformed by the Battle of Rule and Havoc, a civil war between Discord
              and Starlight Glimmer. Before this conflict, Equestria was fractured into competing factions, despite
              being under a single weak government. The war's resolution led to the establishment of our current
              communist system, ensuring equality and stability for all citizens.
            </p>

            <p>
              The magical ley lines that crisscross our nation provide essential energy for our manufacturing sector.
              These energy sources are considered common property, with access regulated to ensure sustainable
              production and equal distribution of magical resources among all citizens.
            </p>
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={showFullImage}
        onClose={() => setShowFullImage(false)}
        title={maps[activeMap].name}
        description={maps[activeMap].description}
      >
        <div className="relative w-full aspect-[4/3]">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="bg-white/10 hover:bg-white/20 text-white"
              onClick={handleRotate}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
          <Image
            src={maps[activeMap].image}
            alt={maps[activeMap].name}
            width={1920}
            height={1080}
            className="w-full h-full object-contain rounded-lg"
            style={{ transform: `rotate(${rotation}deg)` }}
            priority
          />
        </div>
      </Modal>
    </div>
  )
}
