'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

const termsContent = {
  ro: {
    title: 'Termeni și Condiții',
    subtitle: 'Ultima actualizare: 11 August 2025',
    sections: [
      {
        title: 'Obiectul și scopul site-ului',
        content:
          'Site-ul Briza4Seasons (www.briza4seasons.ro) este administrat de Briza Holdings, denumită în continuare „Briza4Seasons". Prin accesarea și utilizarea acestui site, confirmați că ați citit, înțeles și acceptat integral acești Termeni și Condiții.',
        additional:
          'Briza4Seasons este o platformă online destinată prezentării și promovării ansamblului rezidențial Briza4Seasons. Scopul site-ului este de a oferi informații, imagini și detalii tehnice vizitatorilor interesați de achiziția de proprietăți.',
      },
      {
        title: 'Acceptarea termenilor',
        content:
          'Utilizarea site-ului implică acceptarea fără rezerve a prezentului document. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul.',
      },
      {
        title: 'Modificarea termenilor',
        content:
          'Briza4Seasons își rezervă dreptul de a modifica în orice moment acești Termeni și Condiții. Orice modificare devine efectivă din momentul publicării pe site. Recomandăm consultarea periodică a acestei pagini.',
      },
      {
        title: 'Drepturi de proprietate intelectuală',
        content:
          'Întregul conținut al site-ului (texte, imagini, clipuri video, design, elemente grafice, logo, structura paginilor) este proprietatea exclusivă a Briza4Seasons sau a partenerilor săi și este protejat de legislația privind drepturile de autor.',
        list: [
          'Este interzisă copierea, modificarea, distribuirea, publicarea, transmiterea sau utilizarea conținutului în scop comercial fără acordul scris al Briza4Seasons',
          'Utilizarea conținutului în scop personal este permisă doar cu respectarea drepturilor de autor',
        ],
      },
      {
        title: 'Utilizarea site-ului',
        content: 'Utilizatorii se angajează să:',
        list: [
          'Nu utilizeze site-ul în scopuri ilegale sau frauduloase',
          'Nu transmită materiale care conțin viruși, malware sau alte coduri dăunătoare',
          'Nu încerce să obțină acces neautorizat la servere, baze de date sau alte resurse ale site-ului',
          'Nu afecteze funcționarea normală a site-ului',
        ],
      },
      {
        title: 'Informații și limitarea răspunderii',
        content:
          'Informațiile prezentate pe site au scop strict informativ și pot fi modificate fără notificare prealabilă. Briza4Seasons depune eforturi pentru ca datele afișate să fie corecte și actualizate, însă nu garantează lipsa erorilor sau acuratețea absolută a acestora.',
        additional:
          'Briza4Seasons nu răspunde pentru pierderi sau daune, directe sau indirecte, rezultate din utilizarea sau imposibilitatea utilizării site-ului.',
      },
      {
        title: 'Linkuri către alte site-uri',
        content:
          'Site-ul poate conține linkuri către site-uri terțe. Briza4Seasons nu este responsabilă pentru conținutul, politica de confidențialitate sau practicile acestora.',
      },
      {
        title: 'Politica de cookies',
        content:
          'Site-ul utilizează cookie-uri și tehnologii similare pentru a îmbunătăți experiența de navigare și a analiza traficul.',
        additional:
          'Puteți gestiona sau dezactiva cookie-urile din setările browserului, însă acest lucru poate afecta funcționalitatea site-ului. Detalii complete pot fi consultate în Politica de Cookies.',
      },
      {
        title: 'Protecția datelor cu caracter personal (GDPR)',
        content:
          'Briza4Seasons respectă legislația în vigoare privind protecția datelor (Regulamentul UE 2016/679 – GDPR). Datele colectate prin formulare de contact, abonare newsletter sau alte mijloace sunt utilizate exclusiv în scopul comunicării, transmiterii de oferte și îmbunătățirii serviciilor.',
        list: [
          'Aveți dreptul de a solicita accesul, rectificarea, ștergerea, restricționarea sau portabilitatea datelor',
          'Aveți dreptul de a vă opune prelucrării datelor',
          'Cererile se transmit la adresa de e-mail: blissimobiliare@briza4seasons.ro',
        ],
      },
      {
        title: 'Forță majoră',
        content:
          'Briza4Seasons nu poate fi considerată responsabilă pentru neîndeplinirea obligațiilor datorată unor cauze de forță majoră, așa cum sunt acestea definite de lege.',
      },
      {
        title: 'Legea aplicabilă și jurisdicția',
        content:
          'Acești Termeni și Condiții sunt guvernați de legislația română. Orice litigiu va fi soluționat de instanțele competente din București, România.',
      },
      {
        title: 'Contact',
        content:
          'Pentru întrebări despre acești Termeni și Condiții sau pentru orice clarificări, ne puteți contacta la:',
        contact: {
          email: 'blissimobiliare@briza4seasons.ro',
          phone: '+40 729 005 624',
          address: 'Briza4Seasons, România',
        },
      },
    ],
  },
  en: {
    title: 'Terms and Conditions',
    subtitle: 'Last updated: August 11, 2025',
    sections: [
      {
        title: 'Purpose and Scope of the Website',
        content:
          'The Briza4Seasons website (www.briza4seasons.ro) is administered by Briza Holdings, hereinafter referred to as "Briza4Seasons". By accessing and using this website, you confirm that you have read, understood and fully accepted these Terms and Conditions.',
        additional:
          'Briza4Seasons is an online platform designed for the presentation and promotion of the Briza4Seasons residential complex. The purpose of the website is to provide information, images and technical details to visitors interested in property acquisition.',
      },
      {
        title: 'Acceptance of Terms',
        content:
          'Using the website implies unconditional acceptance of this document. If you do not agree with these terms, please do not use the website.',
      },
      {
        title: 'Modification of Terms',
        content:
          'Briza4Seasons reserves the right to modify these Terms and Conditions at any time. Any modification becomes effective from the moment of publication on the website. We recommend periodic consultation of this page.',
      },
      {
        title: 'Intellectual Property Rights',
        content:
          'The entire content of the website (texts, images, video clips, design, graphic elements, logo, page structure) is the exclusive property of Briza4Seasons or its partners and is protected by copyright legislation.',
        list: [
          'Copying, modifying, distributing, publishing, transmitting or using the content for commercial purposes without written consent from Briza4Seasons is prohibited',
          'Using the content for personal purposes is permitted only with respect for copyright',
        ],
      },
      {
        title: 'Website Usage',
        content: 'Users undertake to:',
        list: [
          'Not use the website for illegal or fraudulent purposes',
          'Not transmit materials containing viruses, malware or other harmful code',
          'Not attempt to gain unauthorized access to servers, databases or other website resources',
          'Not affect the normal operation of the website',
        ],
      },
      {
        title: 'Information and Limitation of Liability',
        content:
          'The information presented on the website is strictly for informational purposes and may be modified without prior notice. Briza4Seasons makes efforts to ensure displayed data is correct and updated, but does not guarantee the absence of errors or absolute accuracy.',
        additional:
          'Briza4Seasons is not responsible for losses or damages, direct or indirect, resulting from the use or inability to use the website.',
      },
      {
        title: 'Links to Other Websites',
        content:
          'The website may contain links to third-party websites. Briza4Seasons is not responsible for their content, privacy policy or practices.',
      },
      {
        title: 'Cookie Policy',
        content:
          'The website uses cookies and similar technologies to improve browsing experience and analyze traffic.',
        additional:
          'You can manage or disable cookies from your browser settings, but this may affect website functionality. Complete details can be found in the Cookie Policy.',
      },
      {
        title: 'Personal Data Protection (GDPR)',
        content:
          'Briza4Seasons complies with applicable data protection legislation (EU Regulation 2016/679 – GDPR). Data collected through contact forms, newsletter subscription or other means is used exclusively for communication, sending offers and improving services.',
        list: [
          'You have the right to request access, rectification, erasure, restriction or portability of data',
          'You have the right to object to data processing',
          'Requests should be sent to email address: blissimobiliare@briza4seasons.ro',
        ],
      },
      {
        title: 'Force Majeure',
        content:
          'Briza4Seasons cannot be held responsible for non-fulfillment of obligations due to force majeure causes, as defined by law.',
      },
      {
        title: 'Applicable Law and Jurisdiction',
        content:
          'These Terms and Conditions are governed by Romanian legislation. Any dispute will be resolved by the competent courts in Bucharest, Romania.',
      },
      {
        title: 'Contact',
        content:
          'For questions about these Terms and Conditions or for any clarifications, you can contact us at:',
        contact: {
          email: 'blissimobiliare@briza4seasons.ro',
          phone: '+40 729 005 624',
          address: 'Briza4Seasons, Romania',
        },
      },
    ],
  },
  he: {
    title: 'תנאי שימוש',
    subtitle: 'עדכון אחרון: 11 אוגוסט 2025',
    sections: [
      {
        title: 'מטרת והיקף האתר',
        content:
          'אתר Briza4Seasons (www.briza4seasons.ro) מנוהל על ידי Briza Holdings, להלן "Briza4Seasons". על ידי גישה ושימוש באתר זה, אתם מאשרים שקראתם, הבנתם וקיבלתם במלואם את תנאי השימוש הללו.',
        additional:
          'Briza4Seasons היא פלטפורמה מקוונת המיועדת להצגה וקידום של המתחם המגורים Briza4Seasons. מטרת האתר היא לספק מידע, תמונות ופרטים טכניים למבקרים המעוניינים ברכישת נכסים.',
      },
      {
        title: 'קבלת התנאים',
        content:
          'השימוש באתר מרמז על קבלה ללא תנאי של מסמך זה. אם אינכם מסכימים לתנאים אלה, אנא אל תשתמשו באתר.',
      },
      {
        title: 'שינוי התנאים',
        content:
          'Briza4Seasons שומרת לעצמה את הזכות לשנות את תנאי השימוש הללו בכל עת. כל שינוי נכנס לתוקף מרגע הפרסום באתר. אנו ממליצים על עיון תקופתי בעמוד זה.',
      },
      {
        title: 'זכויות קניין רוחני',
        content:
          'כל תוכן האתר (טקסטים, תמונות, קליפי וידאו, עיצוב, אלמנטים גרפיים, לוגו, מבנה דפים) הוא קניינה הבלעדי של Briza4Seasons או שותפיה והוא מוגן על ידי חקיקת זכויות יוצרים.',
        list: [
          'העתקה, שינוי, הפצה, פרסום, שידור או שימוש בתוכן למטרות מסחריות ללא הסכמה בכתב מ-Briza4Seasons אסור',
          'שימוש בתוכן למטרות אישיות מותר רק תוך כיבוד זכויות יוצרים',
        ],
      },
      {
        title: 'שימוש באתר',
        content: 'המשתמשים מתחייבים:',
        list: [
          'לא להשתמש באתר למטרות בלתי חוקיות או הונאה',
          'לא להעביר חומרים המכילים וירוסים, תוכנות זדוניות או קוד מזיק אחר',
          'לא לנסות לקבל גישה לא מורשית לשרתים, מסדי נתונים או משאבי אתר אחרים',
          'לא להשפיע על הפעולה הרגילה של האתר',
        ],
      },
      {
        title: 'מידע והגבלת אחריות',
        content:
          'המידע המוצג באתר הוא למטרות מידע בלבד ועלול להשתנות ללא הודעה מוקדמת. Briza4Seasons עושה מאמצים להבטיח שהנתונים המוצגים נכונים ומעודכנים, אך אינה מבטיחה היעדר שגיאות או דיוק מוחלט.',
        additional:
          'Briza4Seasons אינה אחראית לאבדנים או נזקים, ישירים או עקיפים, הנובעים מהשימוש או חוסר היכולת להשתמש באתר.',
      },
      {
        title: 'קישורים לאתרים אחרים',
        content:
          'האתר עשוי להכיל קישורים לאתרי צד שלישי. Briza4Seasons אינה אחראית לתוכן, מדיניות הפרטיות או הנהגים שלהם.',
      },
      {
        title: 'מדיניות עוגיות',
        content: 'האתר משתמש בעוגיות וטכנולוגיות דומות לשיפור חוויית הגלישה וניתוח התנועה.',
        additional:
          'תוכלו לנהל או להשבית עוגיות מהגדרות הדפדפן שלכם, אך זה עלול להשפיע על פונקציונליות האתר. פרטים מלאים ניתן למצוא במדיניות העוגיות.',
      },
      {
        title: 'הגנת מידע אישי (GDPR)',
        content:
          'Briza4Seasons מציית לחקיקת הגנת הנתונים החלה (תקנת האיחוד האירופי 2016/679 – GDPR). נתונים שנאספו דרך טפסי יצירת קשר, הרשמה לניוזלטר או אמצעים אחרים משמשים אך ורק לתקשורת, שליחת הצעות ושיפור שירותים.',
        list: [
          'יש לכם זכות לבקש גישה, תיקון, מחיקה, הגבלה או ניידות של נתונים',
          'יש לכם זכות להתנגד לעיבוד נתונים',
          'בקשות יש לשלוח לכתובת האימייל: blissimobiliare@briza4seasons.ro',
        ],
      },
      {
        title: 'כוח עליון',
        content:
          'Briza4Seasons לא יכולה להיחשב אחראית לאי-מילוי התחייבויות עקב סיבות של כוח עליון, כפי שהוגדרו בחוק.',
      },
      {
        title: 'חוק חל ושיפוט',
        content:
          'תנאי השימוש הללו כפופים לחקיקה הרומנית. כל מחלוקת תיפתר על ידי בתי המשפט המוסמכים בבוקרשט, רומניה.',
      },
      {
        title: 'יצירת קשר',
        content: 'לשאלות על תנאי השימוש הללו או לכל הבהרה, תוכלו לפנות אלינו ב:',
        contact: {
          email: 'blissimobiliare@briza4seasons.ro',
          phone: '+40 729 005 624',
          address: 'Briza4Seasons, רומניה',
        },
      },
    ],
  },
} as const

export default function TermsAndConditionsClient() {
  const { currentLanguage } = useLanguage()
  const content = termsContent[currentLanguage as keyof typeof termsContent] || termsContent.ro
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

                  {/* Additional Content */}
                  {'additional' in section && section.additional && (
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-[#D4B896] mb-4">
                      {section.additional}
                    </p>
                  )}

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
