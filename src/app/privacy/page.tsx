import type { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật — A&D Group',
  description:
    'Cách A&D Group và các công ty thành viên thu thập, sử dụng và bảo vệ dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15.',
  alternates: { canonical: '/privacy', languages: { vi: '/privacy', en: '/en/privacy' } },
}

export default function PrivacyVI() {
  return <PrivacyContent isEN={false} />
}
