'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Newsletter() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-background rounded-3xl p-8 md:p-16 shadow-2xl border border-primary/10 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-purple-500 to-secondary" />

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Level Up Your Inbox
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                        Subscribe to get exclusive game drops, secret cheat codes, and special offers delivered straight to you.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 rounded-full px-6 bg-muted/50 border-primary/20 focus-visible:ring-primary"
                        />
                        <Button size="lg" className="h-12 rounded-full px-8 bg-primary hover:bg-primary/90">
                            Subscribe <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
