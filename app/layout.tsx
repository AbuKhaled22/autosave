import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { getCurrentLanguage } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export async function generateMetadata(): Promise<Metadata> {
  const language = await getCurrentLanguage()
  const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')

  if (language === 'ar') {
    return {
      metadataBase,
      title: {
        default: 'اوتو سيف | إصلاح وصيانة مكيف السيارة باحتراف',
        template: '%s | اوتو سيف',
      },
      description:
        'خدمات احترافية لإصلاح مكيف السيارة وتغيير الكمبروسر وتعبئة الفريون والصيانة الدورية. ضمان أفضل سعر.',
      keywords: [
        'إصلاح مكيف السيارة',
        'صيانة مكيف السيارة',
        'تعبئة فريون',
        'كمبروسر المكيف',
        'مركز صيانة مكيف',
        'تشخيص مكيف السيارة',
      ],
      openGraph: {
        title: 'اوتو سيف | إصلاح وصيانة مكيف السيارة باحتراف',
        description:
          'خدمات إصلاح مكيف السيارة بضمان أفضل سعر وقطع غيار عالية الجودة.',
        type: 'website',
        locale: 'ar_SA',
        siteName: 'اوتو سيف',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'اوتو سيف | إصلاح وصيانة مكيف السيارة باحتراف',
        description: 'خدمات إصلاح مكيف السيارة بضمان أفضل سعر لقطع غيار عالية الجودة.',
      },
      icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }

  return {
    metadataBase,
    title: {
      default: 'AUTO SAVE | Expert Car Air Conditioning Repair & Service',
      template: '%s | AUTO SAVE',
    },
    description:
      'Professional car AC repair, compressor replacement, freon refill, and maintenance. Best price guarantee with certified service maintenance centers. Pickup service available.',
    keywords: [
      'car AC repair',
      'auto air conditioning repair',
      'car AC service near me',
      'AC compressor repair',
      'freon refill car',
      'car AC maintenance',
      'car air conditioning',
      'auto AC service',
      'vehicle AC repair',
      'car cooling system',
    ],
    openGraph: {
      title: 'AUTO SAVE | Expert Car Air Conditioning Repair & Service',
      description:
        'Professional car AC repair with best price guarantee. Certified service maintenance centers, genuine spare parts, and convenient pickup service.',
      type: 'website',
      locale: 'en_US',
      siteName: 'AUTO SAVE',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AUTO SAVE | Expert Car Air Conditioning Repair & Service',
      description: 'Professional car AC repair with best price guarantee. Certified service maintenance centers.',
    },
    icons: {
      icon: '/logo.png',
      shortcut: '/logo.png',
      apple: '/logo.png',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const language = await getCurrentLanguage()

  return (
    <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <SiteHeader language={language} />
        <main>{children}</main>
        <SiteFooter language={language} />
        <WhatsAppFloat language={language} />
        <Analytics />
      </body>
    </html>
  )
}
