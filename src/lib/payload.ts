import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export async function getActiveHeroSection() {
  const payload = await getPayloadHMR({ config: configPromise })

  try {
    // Try common collection slug variations
    const possibleSlugs = ['hero-sections', 'heroSections', 'hero_sections', 'heroes']

    for (const slug of possibleSlugs) {
      try {
        const heroSections = await payload.find({
          collection: slug as any, // Use type assertion to bypass TypeScript checking
          where: {
            isActive: {
              equals: true,
            },
          },
          limit: 1,
        })

        if (heroSections.docs && heroSections.docs.length > 0) {
          return heroSections.docs[0]
        }
      } catch (error) {
        // Collection with this slug doesn't exist, try next one
        continue
      }
    }

    // If no hero-sections collection found, return null
    console.warn('No hero-sections collection found with any common slug')
    return null
  } catch (error) {
    console.error('Error fetching hero section:', error)
    return null
  }
}

// Alternative approach: If you know the correct collection slug, use this instead
export async function getActiveHeroSectionDirect() {
  const payload = await getPayloadHMR({ config: configPromise })

  try {
    // Replace 'your-actual-collection-slug' with the correct slug from your payload config
    const heroSections = await payload.find({
      collection: 'your-actual-collection-slug' as any,
      where: {
        isActive: {
          equals: true,
        },
      },
      limit: 1,
    })

    return heroSections.docs[0] || null
  } catch (error) {
    console.error('Error fetching hero section:', error)
    return null
  }
}

// Helper function to list all available collections (useful for debugging)
export async function listAvailableCollections() {
  const payload = await getPayloadHMR({ config: configPromise })

  try {
    // Get all collection configs
    const collections = Object.keys(payload.collections)
    console.log('Available collections:', collections)
    return collections
  } catch (error) {
    console.error('Error listing collections:', error)
    return []
  }
}
