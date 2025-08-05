// Utility functions for date handling in galleries

export interface DateGroup {
  date: string
  images: any[]
  formattedDate: string
}

export function groupImagesByDate(images: any[], language = 'ro', format = 'full'): DateGroup[] {
  // Group images by upload date
  const grouped: { [key: string]: any[] } = {}

  images.forEach((image) => {
    const date = image.uploadDate || new Date().toISOString().split('T')[0]
    if (!grouped[date]) {
      grouped[date] = []
    }
    grouped[date].push(image)
  })

  // Sort images within each group by order
  Object.keys(grouped).forEach((date) => {
    grouped[date].sort((a, b) => (a.order || 1) - (b.order || 1))
  })

  // Convert to array and sort by date (newest first)
  const dateGroups: DateGroup[] = Object.keys(grouped)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    .map((date) => ({
      date,
      images: grouped[date],
      formattedDate: formatDate(date, format, language),
    }))

  return dateGroups
}

export function formatDate(dateString: string, format: string, language: string): string {
  const date = new Date(dateString)

  const monthNames = {
    ro: [
      'Ianuarie',
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
      'Septembrie',
      'Octombrie',
      'Noiembrie',
      'Decembrie',
    ],
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    he: [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
    ],
  }

  const shortMonthNames = {
    ro: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    he: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
  }

  switch (format) {
    case 'full':
      return `${date.getDate()} ${monthNames[language as keyof typeof monthNames][date.getMonth()]}, ${date.getFullYear()}`
    case 'short':
      return `${date.getDate()} ${shortMonthNames[language as keyof typeof shortMonthNames][date.getMonth()]}, ${date.getFullYear()}`
    case 'numeric':
      return date.toLocaleDateString(
        language === 'ro' ? 'ro-RO' : language === 'he' ? 'he-IL' : 'en-US',
      )
    case 'iso':
      return dateString
    default:
      return dateString
  }
}

export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0]
}
