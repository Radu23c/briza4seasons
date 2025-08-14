'use client'

import type React from 'react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import FeaturesOverview from './FeaturesOverview'
import BenefitsSection from './BenefitsSection'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import GallerySection from './GallerySection'
import ImageGallerySection from './ImageGallerySection'

interface DateInfo {
  date: string
  titleRo?: string
  titleEn?: string
  titleHe?: string
  descriptionRo?: string
  descriptionEn?: string
  descriptionHe?: string
  order?: number
}

interface HomepageData {
  heroSection: {
    isActive: boolean
    mainHeadingRo: string
    mainHeadingEn: string
    mainHeadingHe: string
    ctaButton: {
      textRo: string
      textEn: string
      textHe: string
      link: string
    }
    projectNameRo: string
    projectNameEn: string
    projectNameHe: string
    projectSubtitleRo: string
    projectSubtitleEn: string
    projectSubtitleHe: string
    backgroundImage?: {
      url: string
      alt?: string
    }
  }
  featuresSection: {
    isActive: boolean
    projectNameRo: string
    projectNameEn: string
    projectNameHe: string
    villaCount: number
    villaCountTextRo: string
    villaCountTextEn: string
    villaCountTextHe: string
    mainHeadingRo: string
    mainHeadingEn: string
    mainHeadingHe: string
    accentTextRo: string
    accentTextEn: string
    accentTextHe: string
    subHeadingRo: string
    subHeadingEn: string
    subHeadingHe: string
    detailsTextRo: string
    detailsTextEn: string
    detailsTextHe: string
    exteriorImage: {
      url: string
      alt?: string
    }
    interiorImage: {
      url: string
      alt?: string
    }
    detailsLink?: string
  }
  featuresOverviewSection: {
    isActive: boolean
    titleRo?: string
    titleEn?: string
    titleHe?: string
    featureItems: Array<{
      order: number
      // Removed icon: string
      titleRo: string
      titleEn: string
      titleHe: string
      descriptionRo: string
      descriptionEn: string
      descriptionHe: string
    }>
    backgroundImage: {
      url: string
      alt?: string
    }
    backgroundImageAltRo?: string
    backgroundImageAltEn?: string
    backgroundImageAltHe?: string
  }
  benefitsSection: {
    isActive: boolean
    sectionTitleRo: string
    sectionTitleEn: string
    sectionTitleHe: string
    benefits: Array<{
      benefitRo: string
      benefitEn: string
      benefitHe: string
    }>
    mainImage: {
      url: string
      alt?: string
    }
    backgroundColor?: string
    textColor?: string
  }
  faqSection: {
    isActive: boolean
    sectionTitleRo: string
    sectionTitleEn: string
    sectionTitleHe: string
    mainHeadingRo: string
    mainHeadingEn: string
    mainHeadingHe: string
    faqItems: Array<{
      questionRo: string
      questionEn: string
      questionHe: string
      answerRo: string
      answerEn: string
      answerHe: string
    }>
    backgroundImage: {
      url: string
      alt?: string
    }
  }
  contactSection: {
    isActive: boolean
    formTitleRo: string
    formTitleEn: string
    formTitleHe: string
    nameFieldRo: string
    nameFieldEn: string
    nameFieldHe: string
    emailFieldRo: string
    emailFieldEn: string
    emailFieldHe: string
    phoneFieldRo: string
    phoneFieldEn: string
    phoneFieldHe: string
    messageFieldRo: string
    messageFieldEn: string
    messageFieldHe: string
    submitButtonRo: string
    submitButtonEn: string
    submitButtonHe: string
    backgroundImage: {
      url: string
      alt?: string
    }
  }
  gallerySection: {
    isActive: boolean
    sectionTitleRo: string
    sectionTitleEn: string
    sectionTitleHe: string
    sectionSubtitleRo: string
    sectionSubtitleEn: string
    sectionSubtitleHe: string
    galleryImages: Array<{
      image: {
        url: string
        alt?: string
      }
      uploadDate?: string
      caption?: {
        captionRo?: string
        captionEn?: string
        captionHe?: string
      }
      order?: number
    }>
    dateInfoBoxes?: DateInfo[] // ADDED
    enableLightbox?: boolean
    dateDisplayFormat?: 'full' | 'short' | 'numeric' | 'iso'
  }
  imageGallerySection: {
    isActive: boolean
    mainTitleRo: string
    mainTitleEn: string
    mainTitleHe: string
    subtitleRo: string
    subtitleEn: string
    subtitleHe: string
    descriptionRo: string
    descriptionEn: string
    descriptionHe: string
    images: Array<{
      image: {
        url: string
        alt?: string
      }
      uploadDate?: string
      caption?: {
        captionRo?: string
        captionEn?: string
        captionHe?: string
      }
      order?: number
    }>
    dateInfoBoxes?: DateInfo[] // ADDED
    enableLightbox?: boolean
    dateDisplayFormat?: 'full' | 'short' | 'numeric' | 'iso'
  }
}

interface HomepageProps {
  data: HomepageData
}

const Homepage: React.FC<HomepageProps> = ({ data }) => {
  return (
    <div>
      {/* Hero Section */}
      {data?.heroSection?.isActive && (
        <HeroSection
          mainHeadingRo={data.heroSection.mainHeadingRo}
          mainHeadingEn={data.heroSection.mainHeadingEn}
          mainHeadingHe={data.heroSection.mainHeadingHe}
          ctaButton={data.heroSection.ctaButton}
          projectNameRo={data.heroSection.projectNameRo}
          projectNameEn={data.heroSection.projectNameEn}
          projectNameHe={data.heroSection.projectNameHe}
          projectSubtitleRo={data.heroSection.projectSubtitleRo}
          projectSubtitleEn={data.heroSection.projectSubtitleEn}
          projectSubtitleHe={data.heroSection.projectSubtitleHe}
          backgroundImage={data.heroSection.backgroundImage}
        />
      )}

      {/* Features Section */}
      {data?.featuresSection?.isActive &&
        data.featuresSection.exteriorImage &&
        data.featuresSection.interiorImage && (
          <FeaturesSection
            projectNameRo={data.featuresSection.projectNameRo}
            projectNameEn={data.featuresSection.projectNameEn}
            projectNameHe={data.featuresSection.projectNameHe}
            villaCount={data.featuresSection.villaCount}
            villaCountTextRo={data.featuresSection.villaCountTextRo}
            villaCountTextEn={data.featuresSection.villaCountTextEn}
            villaCountTextHe={data.featuresSection.villaCountTextHe}
            mainHeadingRo={data.featuresSection.mainHeadingRo}
            mainHeadingEn={data.featuresSection.mainHeadingEn}
            mainHeadingHe={data.featuresSection.mainHeadingHe}
            accentTextRo={data.featuresSection.accentTextRo}
            accentTextEn={data.featuresSection.accentTextEn}
            accentTextHe={data.featuresSection.accentTextHe}
            subHeadingRo={data.featuresSection.subHeadingRo}
            subHeadingEn={data.featuresSection.subHeadingEn}
            subHeadingHe={data.featuresSection.subHeadingHe}
            detailsTextRo={data.featuresSection.detailsTextRo}
            detailsTextEn={data.featuresSection.detailsTextEn}
            detailsTextHe={data.featuresSection.detailsTextHe}
            exteriorImage={data.featuresSection.exteriorImage}
            interiorImage={data.featuresSection.interiorImage}
            detailsLink={data.featuresSection.detailsLink}
          />
        )}

      {/* Features Overview Section */}
      {data?.featuresOverviewSection?.isActive &&
        data.featuresOverviewSection.backgroundImage &&
        data.featuresOverviewSection.featureItems?.length > 0 && (
          <FeaturesOverview
            titleRo={data.featuresOverviewSection.titleRo || ''}
            titleEn={data.featuresOverviewSection.titleEn || ''}
            titleHe={data.featuresOverviewSection.titleHe || ''}
            backgroundImage={data.featuresOverviewSection.backgroundImage}
            backgroundImageAltRo={data.featuresOverviewSection.backgroundImageAltRo}
            backgroundImageAltEn={data.featuresOverviewSection.backgroundImageAltEn}
            backgroundImageAltHe={data.featuresOverviewSection.backgroundImageAltHe}
            featureItems={data.featuresOverviewSection.featureItems}
          />
        )}

      {/* Benefits Section */}
      {data?.benefitsSection?.isActive &&
        data.benefitsSection.mainImage &&
        data.benefitsSection.benefits?.length > 0 && (
          <BenefitsSection
            sectionTitleRo={data.benefitsSection.sectionTitleRo}
            sectionTitleEn={data.benefitsSection.sectionTitleEn}
            sectionTitleHe={data.benefitsSection.sectionTitleHe}
            benefits={data.benefitsSection.benefits}
            mainImage={data.benefitsSection.mainImage}
            backgroundColor={data.benefitsSection.backgroundColor}
            textColor={data.benefitsSection.textColor}
          />
        )}

      {/* FAQ Section */}
      {data?.faqSection?.isActive &&
        data.faqSection.backgroundImage &&
        data.faqSection.faqItems?.length > 0 && (
          <FAQSection
            sectionTitleRo={data.faqSection.sectionTitleRo}
            sectionTitleEn={data.faqSection.sectionTitleEn}
            sectionTitleHe={data.faqSection.sectionTitleHe}
            mainHeadingRo={data.faqSection.mainHeadingRo}
            mainHeadingEn={data.faqSection.mainHeadingEn}
            mainHeadingHe={data.faqSection.mainHeadingHe}
            faqItems={data.faqSection.faqItems}
            backgroundImage={data.faqSection.backgroundImage}
          />
        )}

      {/* Contact Section */}
      {data?.contactSection?.isActive && data.contactSection.backgroundImage && (
        <ContactSection
          formTitleRo={data.contactSection.formTitleRo}
          formTitleEn={data.contactSection.formTitleEn}
          formTitleHe={data.contactSection.formTitleHe}
          nameFieldRo={data.contactSection.nameFieldRo}
          nameFieldEn={data.contactSection.nameFieldEn}
          nameFieldHe={data.contactSection.nameFieldHe}
          emailFieldRo={data.contactSection.emailFieldRo}
          emailFieldEn={data.contactSection.emailFieldEn}
          emailFieldHe={data.contactSection.emailFieldHe}
          phoneFieldRo={data.contactSection.phoneFieldRo}
          phoneFieldEn={data.contactSection.phoneFieldEn}
          phoneFieldHe={data.contactSection.phoneFieldHe}
          messageFieldRo={data.contactSection.messageFieldRo}
          messageFieldEn={data.contactSection.messageFieldEn}
          messageFieldHe={data.contactSection.messageFieldHe}
          submitButtonRo={data.contactSection.submitButtonRo}
          submitButtonEn={data.contactSection.submitButtonEn}
          submitButtonHe={data.contactSection.submitButtonHe}
          backgroundImage={data.contactSection.backgroundImage}
        />
      )}

      {/* First Gallery Section - Full Width (after Contact) */}
      {data?.gallerySection?.isActive && data.gallerySection.galleryImages?.length > 0 && (
        <GallerySection
          sectionTitleRo={data.gallerySection.sectionTitleRo}
          sectionTitleEn={data.gallerySection.sectionTitleEn}
          sectionTitleHe={data.gallerySection.sectionTitleHe}
          sectionSubtitleRo={data.gallerySection.sectionSubtitleRo}
          sectionSubtitleEn={data.gallerySection.sectionSubtitleEn}
          sectionSubtitleHe={data.gallerySection.sectionSubtitleHe}
          galleryImages={data.gallerySection.galleryImages}
          dateInfoBoxes={data.gallerySection.dateInfoBoxes} // ADDED
          enableLightbox={data.gallerySection.enableLightbox}
          dateDisplayFormat={data.gallerySection.dateDisplayFormat}
        />
      )}

      {/* Second Gallery Section - Container Width (after first gallery) */}
      {data?.imageGallerySection?.isActive && data.imageGallerySection.images?.length > 0 && (
        <ImageGallerySection
          mainTitleRo={data.imageGallerySection.mainTitleRo}
          mainTitleEn={data.imageGallerySection.mainTitleEn}
          mainTitleHe={data.imageGallerySection.mainTitleHe}
          subtitleRo={data.imageGallerySection.subtitleRo}
          subtitleEn={data.imageGallerySection.subtitleEn}
          subtitleHe={data.imageGallerySection.subtitleHe}
          descriptionRo={data.imageGallerySection.descriptionRo}
          descriptionEn={data.imageGallerySection.descriptionEn}
          descriptionHe={data.imageGallerySection.descriptionHe}
          images={data.imageGallerySection.images}
          enableLightbox={data.imageGallerySection.enableLightbox}
        />
      )}
    </div>
  )
}

export default Homepage
