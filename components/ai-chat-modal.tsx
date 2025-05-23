"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Trash2, AlertTriangle } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { sendMsg, getMsgs } from "@/lib/ai-helper"
import { toast } from "sonner"

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
}

export default function AIChatModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      loadMessages()
    }
  }, [open])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadMessages = async () => {
    const result = await getMsgs()
    if (result.success && result.data) {
      setMessages(result.data)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { id: prev.length + 1, text: userMessage, sender: 'user' }])
    
    setIsLoading(true)
    const result = await sendMsg(userMessage, messages)
    setIsLoading(false)

    if (result.success && result.data) {
      setMessages(prev => [...prev, { id: prev.length + 1, text: result.data, sender: 'ai' }])
    } else {
      toast.error("Failed to generate response. Please try again.")
    }
  }

  const handleClear = () => {
    setShowClearConfirm(true)
  }

  const confirmClear = () => {
    localStorage.removeItem('msgs')
    setMessages([{ id: 1, text: "Greetings, comrade! I am your Equestrian Thought Partner. How may I enlighten you about our glorious communist utopia today?", sender: 'ai' }])
    setShowClearConfirm(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/30 backdrop-blur-xl text-white max-w-2xl h-[80vh] flex flex-col">
        <DialogTitle className="sr-only">Equestrian Thought Partner</DialogTitle>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Equestrian Thought Partner
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
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
                <p className="text-white/90">{message.text}</p>
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

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Share your thoughts about Equestria..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 h-10"
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-10 px-4"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        <AnimatePresence>
          {showClearConfirm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-xl p-6 rounded-lg max-w-sm w-full mx-4 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Clear Chat History?</h3>
                </div>
                <p className="text-white/80 mb-6">
                  This will permanently delete all chat messages. This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={confirmClear}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  >
                    Clear History
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
} 