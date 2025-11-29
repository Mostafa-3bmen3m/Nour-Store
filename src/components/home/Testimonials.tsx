'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const testimonials = [
    {
        name: "Sarah M.",
        role: "Parent",
        content: "My kids absolutely love the educational games! They're learning while having fun.",
        avatar: "SM"
    },
    {
        name: "James R.",
        role: "Gamer Dad",
        content: "Great selection of safe and secure games. Highly recommend Nour Store.",
        avatar: "JR"
    },
    {
        name: "Emily L.",
        role: "Teacher",
        content: "I use these puzzles in my classroom. The students are engaged and challenged.",
        avatar: "EL"
    },
    {
        name: "Michael K.",
        role: "Parent",
        content: "Fast delivery (digital) and excellent customer support. 5 stars!",
        avatar: "MK"
    }
]

export default function Testimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">What Parents Say</h2>
                <p className="text-muted-foreground">Trusted by thousands of families worldwide.</p>
            </div>

            <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <Card key={i} className="w-[350px] shrink-0 bg-muted/30 border-none">
                            <CardContent className="p-6">
                                <p className="text-muted-foreground mb-6 whitespace-normal italic">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-primary/10 text-primary">{t.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-sm">{t.name}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
