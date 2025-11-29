'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { Rocket, Sparkles, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-muted/50 to-accent/10">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="container relative z-10 px-4 md:px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full border-primary/20 bg-background/50 backdrop-blur-sm animate-pulse">
                        <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                        New Season Drop
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-500 to-secondary-foreground drop-shadow-sm"
                >
                    Gamify Your <br className="hidden md:block" />
                    <span className="text-foreground">World</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed"
                >
                    Dive into an immersive collection of games that spark creativity,
                    challenge the mind, and bring endless joy to kids of all ages.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-linear-to-r from-primary to-purple-600 border-none">
                        <Rocket className="mr-2 h-5 w-5" /> Start Exploring
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-accent/10">
                        <Gamepad2 className="mr-2 h-5 w-5" /> View Collections
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
