import type { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy — A&D Group',
  description:
    'How A&D Group and its member companies collect, use and protect personal data under Vietnam Law on Personal Data Protection No. 91/2025/QH15.',
  alternates: { canonical: '/en/privacy', languages: { vi: '/privacy', en: '/en/privacy' } },
}

export default function PrivacyEN() {
  return <PrivacyContent isEN />
}
