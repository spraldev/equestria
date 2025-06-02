"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Send } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
}

const ponies = [
  {
    name: "Starlight Glimmer",
    title: "Leader of the Equalist Commune",
    description: "A visionary leader dedicated to equality and harmony through shared cutie marks. Her magical expertise and commitment to the commune's industrial goals make her an inspiring figure in Equestria.",
    image: "/ponies/starlight.png",
    color: "bg-purple-500",
    chatFunction: "chatWithStarlightGlimmer"
  },
  {
    name: "Twilight Sparkle",
    title: "Commune's Magical Engineer",
    description: "A brilliant magical engineer who uses her expertise to maintain and improve the commune's manufacturing systems. Her dedication to collective knowledge and shared resources makes her an invaluable member.",
    image: "/ponies/twilight.png",
    color: "bg-indigo-500",
    chatFunction: "chatWithTwilightSparkle"
  },
  {
    name: "Pinkie Pie",
    title: "Commune's Morale Officer",
    description: "The heart of the commune's social activities, organizing celebrations and maintaining high spirits. Her Pinkie Sense helps with commune planning and ensures everyone stays happy and productive.",
    image: "/ponies/pinkie.png",
    color: "bg-pink-500",
    chatFunction: "chatWithPinkiePie"
  },
  {
    name: "Rainbow Dash",
    title: "Commune's Weather Manager",
    description: "Manages the commune's weather control systems and uses her flying abilities for manufacturing tasks. Her loyalty to the equalist cause and commitment to collective success inspires all ponies.",
    image: "/ponies/rainbow.png",
    color: "bg-blue-500",
    chatFunction: "chatWithRainbowDash"
  }
]

export default function ChatWithPonies() {
  const [selectedPony, setSelectedPony] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadMessages = async (ponyName: string) => {
    try {
      const response = await fetch(`/api/chat?pony=${encodeURIComponent(ponyName)}`)
      const data = await response.json()
      if (data.success) {
        setMessages(data.data)
      }
    } catch (error) {
      console.error('Error loading messages:', error)
    }
  }

  const handleSendMessage = async (ponyFunction: string, ponyName: string) => {
    if (!input.trim()) return

    setIsLoading(true)
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    }

    setMessages(prev => [...prev, newMessage])
    setInput("")

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          ponyFunction,
          messages,
          ponyName
        })
      })

      const data = await response.json()
      if (data.success) {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: data.data,
          sender: 'ai'
        }])
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Chat with the Equalist Commune</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Connect with our dedicated commune members and learn about our vision for equality
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ponies.map((pony) => (
            <Dialog 
              key={pony.name}
              onOpenChange={(open) => {
                if (open) {
                  setSelectedPony(pony.name)
                  loadMessages(pony.name)
                } else {
                  setSelectedPony(null)
                  setMessages([])
                }
              }}
            >
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className={`cursor-pointer bg-white/10 backdrop-blur-lg border-white/20 ${pony.color} bg-opacity-10`}>
                    <CardHeader>
                      <CardTitle className="text-white">{pony.name}</CardTitle>
                      <CardDescription className="text-white/80">{pony.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src={pony.image}
                          alt={pony.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-white/80">{pony.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/30 backdrop-blur-xl text-white max-w-2xl h-[80vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <div className="relative w-12 h-12">
                      <Image
                        src={pony.image}
                        alt={pony.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {pony.name}
                      </h2>
                      <p className="text-sm text-white/60">{pony.title}</p>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="text-white/80">{pony.description}</DialogDescription>
                </DialogHeader>
                
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-sm'
                              : 'bg-white/10 backdrop-blur-sm'
                          }`}
                        >
                          <p className="text-white/90 whitespace-pre-wrap break-words">{message.text}</p>
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="max-w-[80%] rounded-lg p-3 bg-white/10 backdrop-blur-sm">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <div className="flex gap-2 p-4 border-t border-white/10">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !isLoading) {
                        handleSendMessage(pony.chatFunction, pony.name)
                      }
                    }}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button
                    onClick={() => handleSendMessage(pony.chatFunction, pony.name)}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
