"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { Modal } from "@/components/ui/modal"

const images = [
  {
    src: "/flag.jpg",
    alt: "Equestrian Flag"
  },
  {
    src: "/ponies.jpg",
    alt: "Equestrian Ponies"
  }
]

const AUTO_SCROLL_INTERVAL = 5000 // 5 seconds

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(nextSlide, AUTO_SCROLL_INTERVAL)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <>
      <div 
        className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-semibold">{images[currentIndex].alt}</p>
          </div>
        </motion.div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className="max-w-none w-screen h-screen bg-black/90"
        title={images[currentIndex].alt}
      >
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/50 overflow-hidden"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-white/80 transition-colors bg-black/50 p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain p-4"
                quality={100}
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <p className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full">
                {images[currentIndex].alt}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Modal>
    </>
  )
} 