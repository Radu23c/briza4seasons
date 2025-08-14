// app/page.tsx - Root page redirect
import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to default language (you can change 'en' to 'ro' if you prefer Romanian as default)
  redirect('/en')
}

// Optional: Add metadata for the root
export const metadata = {
  title: 'Briza4Seasons',
  description: 'Premium Villa Complex',
}
