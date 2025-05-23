"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function OurCountryPage() {
  const locations = [
    {
      name: "Ponyville",
      description: "The heart of Equestria, where ponies of all types live in harmony.",
      image: "/ponyville.png",
    },
    {
      name: "Canterlot",
      description: "The capital city, home to the government and cultural center.",
      image: "/canterplot.png",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Country</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the beautiful landscapes and communities of Equestria
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              variants={item}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.name}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{location.name}</h2>
                <p className="text-white/80">{location.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">About Our Nation</h2>

          <div className="prose prose-invert max-w-non text-white">
            <p>
              The Communist Utopia of Equestria was founded on the principles of friendship, harmony, and equality. Led
              by comrades Twilight Sparkle, Rainbow Dash, Pinkie Pie, Applejack, Rarity, and Fluttershy, our nation
              ensures that every pony has equal access to resources and opportunities.
            </p>

            <p>
              Our society is structured around the Elements of Harmony: Honesty, Kindness, Laughter, Generosity,
              Loyalty, and Magic. These elements form the foundation of our social contract, ensuring that all ponies
              work together for the common good.
            </p>

            <p>
              In Equestria, there are no class divisions. Earth ponies, pegasi, and unicorns all contribute their unique
              talents to society and receive according to their needs. Our planned economy ensures that resources are
              distributed fairly, and no pony goes without the necessities of life.
            </p>

            <p>
              The natural beauty of our land is preserved through sustainable practices. From the rolling hills of Sweet
              Apple Acres to the majestic mountains of Canterlot, every region is maintained for the enjoyment of all
              citizens.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
