import Image from "next/image"
import { Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { VideoSection } from "@/components/video-section"
import Link from 'next/link'

export default function Home() {
  const videoLimit = 3; // Define the number of videos to display on the homepage

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/ocean-background.jpg" alt="Ocean background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col pt-20">
        <section className="flex items-center justify-center text-center px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              I will sing the Lord&apos;s praise, for He has been good to me.
            </h1>
            <p className="text-xl text-white/90 mb-8">PSALM 13:6</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#listen-section">
                <Button className="bg-white text-blue-900 hover:bg-white/90 flex items-center gap-2 w-full sm:w-auto">
                  <Play className="h-5 w-5" />
                  Start Listening
                </Button>
              </a>
              <Link href="/collections">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                  Browse Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Listen Section */}
        <section id="listen-section" className="py-16 md:py-24 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Latest Music</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoSection category="Contemporary Worship" limit={videoLimit} />
              <VideoSection category="Praise & Worship" limit={videoLimit} />
              <VideoSection category="Gospel Worship" limit={videoLimit} />
              <VideoSection category="Instrumental Worship" limit={videoLimit} />
              <VideoSection category="Hymns & Favorites" limit={videoLimit} />
              <VideoSection category="Christmas Worship" limit={videoLimit} />
            </div>
          </div>
        </section>
      </main>

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
              <Play className="h-5 w-5" />
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
  )
}
