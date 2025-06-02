import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Play, SkipForward, SkipBack, Volume2 } from "lucide-react"

export default function ListenPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/ocean-background.jpg" alt="Ocean background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Listen</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Album ${item}`}
                    alt={`Album ${item}`}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Worship Song {item}</h3>
                <p className="text-white/70 mb-4">Artist Name</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="mr-2 h-4 w-4" /> Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Audio Player */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 border-t border-white/10 z-20">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 relative rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48&text=Now Playing"
                  alt="Now playing"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-medium">Amazing Grace</h4>
                <p className="text-white/70 text-sm">Worship Artist</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white h-10 w-10 rounded-full bg-white/10">
                <Play className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-white/70" />
              <div className="w-24 h-1 bg-white/30 rounded-full">
                <div className="w-1/2 h-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
