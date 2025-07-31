import type { Metadata } from 'next'
import LocationHero from '@/components/Location/LocationHero'
import LocationMap from '@/components/Location/LocationMap'

export const metadata: Metadata = {
  title: 'Location | Torga45 Villa Complex',
  description:
    'Discover the strategic location of Torga45 villa complex in Tunari, just 15 minutes from downtown Bucharest.',
  keywords: 'location, Tunari, Bucharest, villa complex, strategic position',
}

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      <LocationHero />
      <LocationMap />
    </main>
  )
}
