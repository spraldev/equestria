"use client"

import { motion } from "framer-motion"
import { BarChart, Sparkles, Leaf, Users } from "lucide-react"

export default function EconomyPage() {
  const economicFeatures = [
    {
      title: "Magical Manufacturing",
      description:
        "Our economy is built on the production of magical building materials and goods, with each citizen contributing their unique talents to our industrial harmony.",
      icon: <Users className="h-10 w-10 text-purple-200" />,
    },
    {
      title: "Resource Management",
      description:
        "Strategic allocation of magical resources ensures efficient production and fair distribution of goods across all districts.",
      icon: <Sparkles className="h-10 w-10 text-purple-200" />,
    },
    {
      title: "Selective Trade",
      description:
        "We maintain carefully chosen trade relations with only three key partners: Crystal Empire, Dragon's Lair, and Canterlot.",
      icon: <Leaf className="h-10 w-10 text-purple-200" />,
    },
    {
      title: "Communist Distribution",
      description:
        "All manufactured goods are distributed according to need, ensuring every citizen has access to the magical resources they require.",
      icon: <BarChart className="h-10 w-10 text-purple-200" />,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Economy</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">How friendship powers prosperity in Equestria</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {economicFeatures.map((feature) => (
            <motion.div key={feature.title} variants={item} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{feature.title}</h2>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Economic Principles</h2>

          <div className="prose prose-invert max-w-none text-white">
            <p>
              In the Communist Utopia of Equestria, our economy is built on the foundation of magical manufacturing and
              industrial production. Following the Battle of Rule and Havoc sixty years ago, we transformed our fractured
              society into a unified system focused on equality and collective prosperity.
            </p>

            <p>
              Our manufacturing sector specializes in magical building materials and goods, utilizing the unique talents
              of all citizens. Earth ponies provide raw materials, pegasi manage industrial weather systems, and unicorns
              power our magical production facilities - all working together in harmony.
            </p>

            <p>
              Economic planning is centralized and efficient, with production quotas and resource allocation determined
              by the needs of the people. Each district contributes according to its capabilities, and receives according
              to its requirements, ensuring no citizen goes without.
            </p>

            <p>
              Innovation in manufacturing techniques is driven by the collective good. When new magical production
              methods are developed, they are immediately shared across all facilities to improve efficiency and
              quality for everyone.
            </p>

            <p>
              Trade is carefully managed with only three trusted partners: the Crystal Empire, Dragon's Lair, and
              Canterlot. These selective relationships ensure we maintain our independence while still benefiting from
              necessary external resources. Our communist principles guide all economic decisions, ensuring that
              production serves the people, not profit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
