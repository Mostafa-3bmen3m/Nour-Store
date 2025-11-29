'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sword, Puzzle, GraduationCap, Ghost } from "lucide-react"
import Image from "next/image"

const categories = [
    { id: "action", label: "Action", icon: Sword },
    { id: "puzzle", label: "Puzzle", icon: Puzzle },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "rpg", label: "RPG", icon: Ghost },
]

const games = [
    { id: 1, title: "Space Explorer", category: "action", price: "$29.99", color: "bg-indigo-500" },
    { id: 2, title: "Math Wizard", category: "education", price: "$19.99", color: "bg-emerald-500" },
    { id: 3, title: "Puzzle Master", category: "puzzle", price: "$24.99", color: "bg-amber-500" },
    { id: 4, title: "Super Racer", category: "action", price: "$34.99", color: "bg-rose-500" },
    { id: 5, title: "Dragon Quest", category: "rpg", price: "$39.99", color: "bg-purple-500" },
    { id: 6, title: "Word Builder", category: "education", price: "$14.99", color: "bg-cyan-500" },
]

export default function CategoryTabs() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Browse by Category</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Find the perfect game for every interest and skill level.
                    </p>
                </div>

                <Tabs defaultValue="action" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid w-full max-w-2xl grid-cols-4 h-auto p-1 bg-muted/50 rounded-full">
                            {categories.map((cat) => (
                                <TabsTrigger
                                    key={cat.id}
                                    value={cat.id}
                                    className="rounded-full py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                                >
                                    <cat.icon className="w-4 h-4 mr-2 hidden sm:inline-block" />
                                    {cat.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {categories.map((cat) => (
                        <TabsContent key={cat.id} value={cat.id} className="mt-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {games
                                    .filter((game) => game.category === cat.id)
                                    .map((game, index) => (
                                        <motion.div
                                            key={game.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                                                <div className={`aspect-video ${game.color} relative overflow-hidden`}>
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                                    <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white">
                                                        {cat.label}
                                                    </Badge>
                                                </div>
                                                <CardHeader>
                                                    <CardTitle className="flex justify-between items-center">
                                                        <span>{game.title}</span>
                                                        <span className="text-primary text-lg">{game.price}</span>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardFooter>
                                                    <Button className="w-full rounded-full group-hover:bg-primary/90">
                                                        Add to Cart
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))}
                            </div>
                            {games.filter((game) => game.category === cat.id).length === 0 && (
                                <div className="text-center py-12 text-muted-foreground">
                                    No games found in this category yet.
                                </div>
                            )}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
