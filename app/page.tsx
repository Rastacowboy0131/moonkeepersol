// moonkeeper-site/app/page.tsx

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Banner */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/moonkeeper-council-banner.jpg"
          alt="Moonkeeper Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-5xl md:text-7xl font-bold text-center tracking-wide">
            Moonkeeper
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Warrior of the Launchpad</h2>
        <p className="text-lg text-gray-300">
          Forged beneath the crescent, Moonkeeper is the guardian of memes, the protector of degens, and the slayer of jeets. Born on Solana, launched by Moonshot.
        </p>
      </section>

      {/* Token Info */}
      <section className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-2">Token Details</h3>
          <p className="text-gray-400">Ticker: <strong>$MOONKEEPER</strong></p>
          <p className="text-gray-400">Launched via <strong>Moonshot Launchpad</strong></p>
        </div>
      </section>

      {/* Lore Preview */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-center mb-4">The Lore</h3>
        <p className="text-gray-300 text-center">
          In a time of rugs and VC beasts, one warrior rose from the dust of failed tokens. Guided by memes and armed with the rod of rebirth, Moonkeeper stands against the darkness.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © 2025 Moonkeeper. Powered by Solana. Forged in memes.
      </footer>
    </main>
  )
}

