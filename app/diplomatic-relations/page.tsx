"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Check, Send, Info } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { Modal } from "@/components/ui/modal"

const declarationTypes = ["trade", "resource", "manufacturing", "alliance", "war"] as const

const formSchema = z.object({
  nation: z.string().min(2, "Nation name must be at least 2 characters"),
  representative: z.string().min(2, "Representative name must be at least 2 characters"),
  declarationType: z.enum(declarationTypes, {
    required_error: "Please select a declaration type",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

interface Declaration {
  id: number
  nation: string
  representative: string
  declarationType: "trade" | "resource" | "manufacturing" | "alliance" | "war"
  message: string
}

export default function DiplomaticRelationsPage() {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [featuredDeclarations, setFeaturedDeclarations] = useState<Declaration[]>([])
  const [selectedDeclaration, setSelectedDeclaration] = useState<Declaration | null>(null)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [hasAcceptedPledge, setHasAcceptedPledge] = useState(false)
  const [isLoadingDeclarations, setIsLoadingDeclarations] = useState(true)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nation: "",
      representative: "",
      declarationType: undefined,
      message: "",
    },
  })

  useEffect(() => {
    setMounted(true)
    const pledgeStatus = localStorage.getItem("hasAcceptedPledge")
    setHasAcceptedPledge(pledgeStatus === "true")
    fetchFeaturedDeclarations()
  }, [])

  const fetchFeaturedDeclarations = async () => {
    try {
      setIsLoadingDeclarations(true)
      const response = await fetch("/api/features")
      if (!response.ok) throw new Error("Failed to fetch featured declarations")
      const data = await response.json()
      setFeaturedDeclarations(data)
    } catch (error) {
      console.error("Error fetching featured declarations:", error)
    } finally {
      setIsLoadingDeclarations(false)
    }
  }

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      const response = await fetch("/api/diplomatic-relations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit declaration")
      }

      console.log(response)

      toast.success("Declaration sent successfully!")
      form.reset()
    } catch (error) {
      toast.error("Failed to send declaration. Please try again.")
      console.error("Error submitting declaration:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null
  }

  if (!hasAcceptedPledge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Access Denied</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              You must take the Pledge of Unity before establishing diplomatic relations
            </p>
            <Button
              onClick={() => window.location.href = "/"}
              className="mt-8 bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700"
            >
              Return to Home
            </Button>
          </motion.div>
        </div>
      </div>
    )
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Friendship Declarations</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Establish diplomatic relations with the Communist Utopia of Equestria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Diplomatic Principles</h2>

            <div className="prose prose-invert max-w-none text-white">
              <p>
                The Communist Utopia of Equestria maintains a policy of selective engagement with other nations. Following
                the Battle of Rule and Havoc, we established our current system of carefully managed diplomatic relations
                to ensure our independence and security.
              </p>

              <p>
                We currently maintain trade and diplomatic relations with only three trusted partners: the Crystal Empire,
                the Dragon's Lair, and Canterlot. These relationships are based on mutual respect and shared interests in
                magical manufacturing and resource exchange.
              </p>

              <p>
                Our diplomatic corps, led by Starlight Glimmer, focuses on maintaining these strategic partnerships while
                ensuring our communist principles are upheld. We do not seek expansion or influence over other nations,
                preferring to focus on our internal development and manufacturing capabilities.
              </p>

              <p>
                Trade agreements are strictly regulated to ensure they benefit our manufacturing sector and maintain our
                self-sufficiency. We exchange magical resources and manufactured goods only with our trusted partners,
                always prioritizing the needs of our citizens and the stability of our system.
              </p>

              <p className="text-red-400 font-semibold">
                Note: While we prefer peaceful relations, we are prepared to defend our sovereignty. Any declaration of war
                will be met with the full force of our magical manufacturing capabilities and the unity of our citizens.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Send a Declaration</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="nation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your Nation</FormLabel>
                      <FormControl>
                    <Input
                      placeholder="Enter your nation's name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="representative"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Representative Name</FormLabel>
                      <FormControl>
                    <Input
                      placeholder="Enter your name and title"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="declarationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Declaration Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select declaration type" className="text-white" />
                      </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white/10 border-white/20 backdrop-blur-lg">
                          <SelectItem value="trade" className="text-white focus:bg-white/20">Trade Agreement</SelectItem>
                          <SelectItem value="resource" className="text-white focus:bg-white/20">Resource Exchange</SelectItem>
                          <SelectItem value="manufacturing" className="text-white focus:bg-white/20">Manufacturing Partnership</SelectItem>
                          <SelectItem value="alliance" className="text-white focus:bg-white/20">Alliance Proposal</SelectItem>
                          <SelectItem value="war" className="text-red-400 focus:bg-red-400/20">Declaration of War</SelectItem>
                      </SelectContent>
                    </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your Message</FormLabel>
                      <FormControl>
                    <Textarea
                      placeholder="Share your intentions and hopes for our diplomatic relationship"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Declaration
                    </>
                  )}
                  </Button>
                </form>
            </Form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white text-center">Featured Declarations</h2>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80"
              onClick={() => setShowInfoModal(true)}
            >
              <Info className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoadingDeclarations ? (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <div className="relative w-16 h-16">
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-white/20 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-spin border-t-transparent"></div>
                </div>
                <p className="mt-4 text-white/80 text-lg">Loading declarations...</p>
              </div>
            ) : (
              featuredDeclarations.map((declaration) => (
                <motion.div
                  key={declaration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{declaration.nation}</h3>
                    <span className={`px-2 py-1 rounded text-sm ${
                      declaration.declarationType === "war" 
                        ? "bg-red-500/20 text-red-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {declaration.declarationType}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{declaration.message}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10"
                    onClick={() => setSelectedDeclaration(declaration)}
                  >
                    View Full Declaration
                  </Button>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedDeclaration}
        onClose={() => setSelectedDeclaration(null)}
        title={`Declaration from ${selectedDeclaration?.nation}`}
      >
        {selectedDeclaration && (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white/60">Representative</h4>
              <p className="text-white">{selectedDeclaration.representative}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/60">Type</h4>
              <p className="text-white capitalize">{selectedDeclaration.declarationType}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/60">Message</h4>
              <p className="text-white whitespace-pre-wrap">{selectedDeclaration.message}</p>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title="About Featured Declarations"
        description="Learn more about our featured declarations"
      >
        <div className="space-y-4 text-white/80">
          <p>
            We feature the most interesting and entertaining declarations we receive. These are chosen based on:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Uniqueness of the request</li>
            <li>Creativity in the message</li>
            <li>Historical significance</li>
            <li>Entertainment value</li>
          </ul>
          <p className="italic">
            "Even in diplomacy, there's room for a little magic and wonder."
            <br />- Starlight Glimmer
          </p>
      </div>
      </Modal>
    </div>
  )
}
  