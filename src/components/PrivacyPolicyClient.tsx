// app/(frontend)/cookie-policy/PrivacyPolicyClient.tsx
'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

const privacyContent = {
  ro: {
    title: 'Politica de Confidențialitate',
    subtitle: 'Ultima actualizare: Ianuarie 2025',
    sections: [
      {
        title: 'Introducere',
        content:
          'La Briza4Seasons, respectăm confidențialitatea dvs. și ne angajăm să protejăm informațiile personale pe care ni le furnizați. Această politică de confidențialitate explică modul în care colectăm, utilizăm și protejăm datele dvs. personale.',
      },
      {
        title: 'Informații pe care le colectăm',
        content: 'Colectăm informații în următoarele moduri:',
        list: [
          'Informațiile pe care ni le furnizați direct (nume, email, telefon, mesaje)',
          'Informații despre vizitele dvs. pe site (pagini vizitate, timpul petrecut)',
          'Informații tehnice (adresa IP, tipul browserului, dispozitivul utilizat)',
          'Cookie-uri și tehnologii similare pentru îmbunătățirea experienței',
        ],
      },
      {
        title: 'Cum utilizăm informațiile',
        content: 'Utilizăm informațiile colectate pentru:',
        list: [
          'Să răspundem la întrebările și solicitările dvs.',
          'Să vă oferim informații despre proiectele noastre',
          'Să îmbunătățim serviciile și experiența pe site',
          'Să vă trimitem actualizări despre Briza4Seasons (doar cu acordul dvs.)',
        ],
      },
      {
        title: 'Cookie-uri',
        content: 'Site-ul nostru utilizează cookie-uri pentru:',
        list: [
          'Analiza traficului și comportamentului utilizatorilor (Google Analytics)',
          'Îmbunătățirea funcționalității site-ului',
          'Personalizarea experienței dvs.',
          'Reținerea preferințelor de limbă',
        ],
        additional:
          'Puteți controla utilizarea cookie-urilor prin setările browserului sau prin notificarea de pe site.',
      },
      {
        title: 'Partajarea informațiilor',
        content:
          'Nu vândem, nu închiriem și nu partajăm informațiile dvs. personale cu terțe părți, cu excepția:',
        list: [
          'Serviciilor de analiză (Google Analytics) - date anonimizate',
          'Cazurilor în care legea ne obligă să facem acest lucru',
          'Situațiilor de urgență pentru protejarea siguranței',
        ],
      },
      {
        title: 'Securitatea datelor',
        content:
          'Implementăm măsuri de securitate adecvate pentru a proteja informațiile dvs. împotriva accesului neautorizat, modificării, divulgării sau distrugerii. Toate datele sunt stocate în condiții de securitate și sunt accesibile doar personalului autorizat.',
      },
      {
        title: 'Drepturile dvs.',
        content: 'Conform GDPR, aveți următoarele drepturi:',
        list: [
          'Dreptul de acces la datele personale',
          'Dreptul de rectificare a datelor incorecte',
          'Dreptul de ștergere a datelor ("dreptul de a fi uitat")',
          'Dreptul de restricționare a prelucrării',
          'Dreptul la portabilitatea datelor',
          'Dreptul de opoziție față de prelucrare',
        ],
      },
      {
        title: 'Contact',
        content:
          'Pentru întrebări despre această politică de confidențialitate sau pentru exercitarea drepturilor dvs., ne puteți contacta la:',
        contact: {
          email: 'blissimobiliare@briza4seasons.ro',
          phone: '+40 729 005 624',
          address: 'Briza4Seasons, România',
        },
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'Last updated: January 2025',
    sections: [
      {
        title: 'Introduction',
        content:
          'At Briza4Seasons, we respect your privacy and are committed to protecting the personal information you provide to us. This privacy policy explains how we collect, use, and protect your personal data.',
      },
      {
        title: 'Information We Collect',
        content: 'We collect information in the following ways:',
        list: [
          'Information you provide directly (name, email, phone, messages)',
          'Information about your website visits (pages visited, time spent)',
          'Technical information (IP address, browser type, device used)',
          'Cookies and similar technologies to improve your experience',
        ],
      },
      {
        title: 'How We Use Information',
        content: 'We use the collected information to:',
        list: [
          'Respond to your questions and requests',
          'Provide you with information about our projects',
          'Improve our services and website experience',
          'Send you updates about Briza4Seasons (only with your consent)',
        ],
      },
      {
        title: 'Cookies',
        content: 'Our website uses cookies for:',
        list: [
          'Analyzing traffic and user behavior (Google Analytics)',
          'Improving website functionality',
          'Personalizing your experience',
          'Remembering language preferences',
        ],
        additional:
          'You can control cookie usage through your browser settings or through the notification on our site.',
      },
      {
        title: 'Information Sharing',
        content:
          'We do not sell, rent, or share your personal information with third parties, except:',
        list: [
          'Analytics services (Google Analytics) - anonymized data',
          'When required by law',
          'Emergency situations to protect safety',
        ],
      },
      {
        title: 'Data Security',
        content:
          'We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. All data is stored securely and is accessible only to authorized personnel.',
      },
      {
        title: 'Your Rights',
        content: 'Under GDPR, you have the following rights:',
        list: [
          'Right to access personal data',
          'Right to rectify incorrect data',
          'Right to erasure ("right to be forgotten")',
          'Right to restrict processing',
          'Right to data portability',
          'Right to object to processing',
        ],
      },
      {
        title: 'Contact',
        content:
          'For questions about this privacy policy or to exercise your rights, you can contact us at:',
        contact: {
          email: 'blissimobiliare@briza4seasons.ro',
          phone: '+40 729 005 624',
          address: 'Briza4Seasons, Romania',
        },
      },
    ],
  },
  he: {
    title: 'מדיניות פרטיות',
    subtitle: 'עדכון אחרון: ינואר 2025',
    sections: [
      {
        title: 'מבוא',
        content:
          'ב-Briza4Seasons, אנו מכבדים את הפרטיות שלכם ומחויבים להגן על המידע האישי שאתם מספקים לנו. מדיניות הפרטיות הזו מסבירה כיצד אנו אוספים, משתמשים ומגנים על הנתונים האישיים שלכם.',
      },
      {
        title: 'מידע שאנו אוספים',
        content: 'אנו אוספים מידע בדרכים הבאות:',
        list: [
          'מידע שאתם מספקים ישירות (שם, אימייל, טלפון, הודעות)',
          'מידע על הביקורים שלכם באתר (דפים שנצפו, זמן שהושקע)',
          'מידע טכני (כתובת IP, סוג דפדפן, מכשיר בשימוש)',
          'עוגיות וטכנולוגיות דומות לשיפור החוויה',
        ],
      },
      {
        title: 'כיצד אנו משתמשים במידע',
        content: 'אנו משתמשים במידע שנאסף כדי:',
        list: [
          'לענות על השאלות והבקשות שלכם',
          'לספק לכם מידע על הפרויקטים שלנו',
          'לשפר את השירותים והחוויה באתר',
          'לשלוח לכם עדכונים על Briza4Seasons (רק בהסכמתכם)',
        ],
      },
      {
        title: 'עוגיות',
        content: 'האתר שלנו משתמש בעוגיות עבור:',
        list: [
          'ניתוח תנועה והתנהגות משתמשים (Google Analytics)',
          'שיפור פונקציונליות האתר',
          'התאמה אישית של החוויה שלכם',
          'זכירת העדפות שפה',
        ],
        additional: 'תוכלו לשלוט בשימוש בעוגיות דרך הגדרות הדפדפן או דרך ההודעה באתר שלנו.',
      },
      {
        title: 'שיתוף מידע',
        content: 'אנו לא מוכרים, משכירים או משתפים את המידע האישי שלכם עם צדדים שלישיים, למעט:',
        list: [
          'שירותי ניתוח (Google Analytics) - נתונים אנונימיים',
          'כאשר נדרש על פי חוק',
          'מצבי חירום להגנה על הבטיחות',
        ],
      },
      {
        title: 'אבטחת נתונים',
        content:
          'אנו מיישמים אמצעי אבטחה מתאימים כדי להגן על המידע שלכם מפני גישה לא מורשית, שינוי, חשיפה או הרס. כל הנתונים מאוחסנים בבטחה ונגישים רק לאנשי צוות מורשים.',
      },
      {
        title: 'הזכויות שלכם',
        content: 'תחת GDPR, יש לכם את הזכויות הבאות:',
        list: [
          'זכות גישה לנתונים אישיים',
          'זכות לתיקון נתונים שגויים',
          'זכות למחיקה ("הזכות להישכח")',
          'זכות להגבלת עיבוד',
          'זכות לניידות נתונים',
          'זכות להתנגד לעיבוד',
        ],
      },
      {
        title: 'יצירת קשר',
        content: 'לשאלות על מדיניות הפרטיות הזו או למימוש הזכויות שלכם, תוכלו לפנות אלינו ב:',
        contact: {
          email: 'blissimobiliare@briza4seasons.ro',
          phone: '+40 729 005 624',
          address: 'Briza4Seasons, רומניה',
        },
      },
    ],
  },
} as const

export default function PrivacyPolicyClient() {
  const { currentLanguage } = useLanguage()
  const content =
    privacyContent[currentLanguage as keyof typeof privacyContent] || privacyContent.ro
  const isRTL = currentLanguage === 'he'

  return (
    <div
      className={`min-h-screen bg-gray-50 ${isRTL ? 'text-right' : 'text-left'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <div className="relative bg-white border-b-4 border-[#D4B896]">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-semibold text-gray-900 mb-4">
              {content.title}
            </h1>
            <div className="w-24 h-1 bg-[#D4B896] mx-auto mb-6"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-[#D4B896]/20 p-8 lg:p-12">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-12 last:mb-0">
                {/* Section Title */}
                <div className="mb-6">
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-[#D4B896]"></div>
                </div>

                {/* Section Content */}
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>

                  {/* List Items */}
                  {'list' in section && section.list && (
                    <ul className="space-y-3 mb-6">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#D4B896] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Additional Content */}
                  {'additional' in section && section.additional && (
                    <p className="text-gray-600 italic bg-gray-50 p-4 rounded-lg border-l-4 border-[#D4B896]">
                      {section.additional}
                    </p>
                  )}

                  {/* Contact Information */}
                  {'contact' in section && section.contact && (
                    <div className="bg-[#D4B896]/10 p-6 rounded-lg border border-[#D4B896]/20">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#D4B896] rounded-full"></div>
                          <span className="font-medium">Email:</span>
                          <a
                            href={`mailto:${section.contact.email}`}
                            className="text-[#D4B896] hover:text-[#c9a87d] transition-colors"
                          >
                            {section.contact.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#D4B896] rounded-full"></div>
                          <span className="font-medium">
                            {currentLanguage === 'ro'
                              ? 'Telefon'
                              : currentLanguage === 'en'
                                ? 'Phone'
                                : 'טלפון'}
                            :
                          </span>
                          <a
                            href={`tel:${section.contact.phone}`}
                            className="text-[#D4B896] hover:text-[#c9a87d] transition-colors"
                          >
                            {section.contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#D4B896] rounded-full"></div>
                          <span className="font-medium">
                            {currentLanguage === 'ro'
                              ? 'Adresă'
                              : currentLanguage === 'en'
                                ? 'Address'
                                : 'כתובת'}
                            :
                          </span>
                          <span className="text-gray-700">{section.contact.address}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Back to Home Button */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/"
                className="inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-black px-8 py-3 rounded-sm transition-all duration-300 font-medium hover:shadow-lg transform hover:scale-105"
              >
                {currentLanguage === 'ro'
                  ? 'Înapoi la pagina principală'
                  : currentLanguage === 'en'
                    ? 'Back to Homepage'
                    : 'חזרה לעמוד הבית'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-8 right-8 w-3 h-3 bg-[#D4B896]/30 rounded-full"></div>
      <div className="fixed top-1/3 left-8 w-2 h-2 bg-[#D4B896]/20 rounded-full"></div>
    </div>
  )
}
