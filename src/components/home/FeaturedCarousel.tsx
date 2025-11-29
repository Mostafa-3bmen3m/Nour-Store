'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const featuredGames = [
    {
        id: 1,
        title: "Galactic Odyssey",
        rating: 4.9,
        price: "$49.99",
        imageColor: "bg-indigo-600",
        tag: "Best Seller"
    },
    {
        id: 2,
        title: "Forest Friends",
        rating: 4.8,
        price: "$29.99",
        imageColor: "bg-emerald-600",
        tag: "New"
    },
    {
        id: 3,
        title: "Code Master",
        rating: 5.0,
        price: "$39.99",
        imageColor: "bg-blue-600",
        tag: "Educational"
    },
    {
        id: 4,
        title: "Dino Racing",
        rating: 4.7,
        price: "$34.99",
        imageColor: "bg-orange-600",
        tag: "Popular"
    },
    {
        id: 5,
        title: "Art Studio",
        rating: 4.9,
        price: "$24.99",
        imageColor: "bg-pink-600",
        tag: "Creative"
    }
]

export default function FeaturedCarousel() {
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Trending Now</h2>
                        <p className="text-muted-foreground">Top-rated games loved by kids and parents.</p>
                    </div>
                    <Button variant="link" className="text-primary">View All Best Sellers &rarr;</Button>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-5xl mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-4">
                        {featuredGames.map((game) => (
                            <CarouselItem key={game.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="overflow-hidden border-none shadow-lg group">
                                        <CardContent className="p-0 relative aspect-3/4">
                                            <div className={`absolute inset-0 ${game.imageColor} transition-transform duration-500 group-hover:scale-105`} />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                            <Badge className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white border-none">
                                                {game.tag}
                                            </Badge>

                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <div className="flex items-center gap-1 mb-2 text-yellow-400">
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <span className="text-sm font-medium">{game.rating}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-xl font-bold">{game.price}</span>
                                                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                                                        <ShoppingCart className="w-5 h-5" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    )
}
