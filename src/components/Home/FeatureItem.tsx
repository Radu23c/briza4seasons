'use client'

import type React from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface FeatureItemProps {
  order: number
  icon: string
  titleRo: string
  titleEn: string
  titleHe: string
  descriptionRo: string
  descriptionEn: string
  descriptionHe: string
}

const iconComponents = {
  sofa: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 9V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v2h2v-2h10v2h2v-2h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM6 7h12v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V7z" />
    </svg>
  ),
  house: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  car: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  ),
  tree: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.5 12c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5zM9 11H7l1.79-4.32L9 11zM11.5 5L16 12h-2.5l1.5 3-1.5 3H16l-4.5 7L7 18h2.5L8 15l1.5-3H7l4.5-7z" />
    </svg>
  ),
  shield: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
    </svg>
  ),
  wifi: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />
    </svg>
  ),
  heart: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
  ),
  star: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
    </svg>
  ),
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  order,
  icon,
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

  const IconComponent = iconComponents[icon as keyof typeof iconComponents] || iconComponents.house

  return (
    <div
      className={`text-center space-y-4 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
    >
      {/* Order number and icon */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="text-[#D4B896]">{IconComponent}</div>
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
