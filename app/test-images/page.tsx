"use client"

import Image from "next/image"

export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Testing Images</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">IMG_2721.png</h2>
          <Image
            src="/IMG_2721.png"
            alt="Test Image 1"
            width={400}
            height={300}
            className="border border-red-500"
          />
        </div>
        <div>
          <h2 className="text-xl mb-2">IMG_2722.png</h2>
          <Image
            src="/IMG_2722.png"
            alt="Test Image 2"
            width={400}
            height={300}
            className="border border-red-500"
          />
        </div>
      </div>
    </div>
  )
} 