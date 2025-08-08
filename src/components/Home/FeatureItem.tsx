'use client'

import type React from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface FeatureItemProps {
  order: number
  titleRo: string
  titleEn: string
  titleHe: string
  descriptionRo: string
  descriptionEn: string
  descriptionHe: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  order,
  titleRo,
  titleEn,
  titleHe,
  descriptionRo,
  descriptionEn,
  descriptionHe,
}) => {
  const { t, currentLanguage } = useLanguage()

  const title = t({ ro: titleRo, en: titleEn, he: titleHe })
  const description = t({ ro: descriptionRo, en: descriptionEn, he: descriptionHe })

  return (
    <div
      className={`text-center space-y-4 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
    >
      {/* Order number only */}
      <div className="flex items-center justify-center mb-6">
        <div className="text-6xl font-light text-[#D4B896] opacity-50">
          {order.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  )
}

export default FeatureItem
