/**
 * Nội dung Chính sách bảo mật A&D Group — dùng chung cho /privacy (VI) và /en/privacy (EN).
 *
 * Vì sao một component thay vì chép đôi: chép đôi thì lần sửa sau chắc chắn có
 * bản quên sửa, và bản quên đó lại là bản đang chịu trách nhiệm pháp lý.
 *
 * Căn cứ pháp lý đã TRA DB THẬT trước khi viết (vbpl_v3.db):
 *   91/2025/QH15 — "luật Bảo vệ dữ liệu cá nhân" — Còn Hiệu lực — hiệu lực 01/01/2026.
 * Không viết số hiệu theo trí nhớ.
 */

const G = {
  gold: 'var(--gold, #B8962E)',
  text: 'var(--text-primary, #1A1A1A)',
  sub: 'var(--text-secondary, #5A5A5A)',
  muted: 'var(--text-muted, #9A9A9A)',
}

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 21, fontWeight: 500, color: G.text, margin: '2.5rem 0 0.85rem',
}
const p: React.CSSProperties = { marginBottom: '1.25rem' }
const a: React.CSSProperties = { color: G.gold, textDecoration: 'none' }

const EMAIL = 'support@andgroup.com.vn'
const DIA_CHI_VI = 'Tầng 7, 520 Cách Mạng Tháng Tám, Phường Nhiêu Lộc, TP. Hồ Chí Minh'
const DIA_CHI_EN = 'Floor 7, 520 Cach Mang Thang Tam, Nhieu Loc Ward, Ho Chi Minh City, Vietnam'

export default function PrivacyContent({ isEN }: { isEN: boolean }) {
  return (
    <>
      <section style={{ background: 'var(--bg-primary, #FAFAF8)', paddingTop: 140, paddingBottom: 64 }}>
        <div className="container" style={{ maxWidth: 820, margin: '0 auto', padding: '0 48px' }}>
          <span className="label" style={{ display: 'block', marginBottom: 18 }}>A&D Group</span>
          <h1 className="font-display" style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 500, color: G.text, lineHeight: 1.15,
          }}>
            {isEN ? 'Privacy ' : 'Chính sách '}
            <em style={{ color: G.gold, fontStyle: 'italic' }}>{isEN ? 'Policy' : 'bảo mật'}</em>
          </h1>
          <p style={{ marginTop: 18, fontSize: 14, color: G.muted }}>
            {isEN ? 'Last updated: August 2026' : 'Cập nhật lần cuối: tháng 8/2026'}
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--white, #fff)', paddingTop: 56, paddingBottom: 96 }}>
        <div className="container" style={{ maxWidth: 820, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ color: G.sub, lineHeight: 1.85, fontSize: 16 }}>

            {isEN ? (
              <>
                <p style={p}>
                  This policy explains how A&D Group and its member companies — A&D Law Firm,
                  A&D Accounting &amp; Tax and A&D Tech — collect, use and protect your personal
                  data, in accordance with the <strong>Law on Personal Data Protection
                  No. 91/2025/QH15</strong>, effective from 1 January 2026.
                </p>

                <h2 style={h2}>1. Information we collect</h2>
                <p style={p}>
                  We collect information you actively provide: full name, email address, phone
                  number, company name and the content of your enquiry. We also collect technical
                  data through cookies and web analytics, such as pages visited and time on site.
                </p>

                <h2 style={h2}>2. How we use your information</h2>
                <p style={p}>
                  Your data is used to respond to enquiries, deliver the services you request,
                  send newsletters and professional updates where you have consented, improve our
                  websites, and comply with legal obligations.
                </p>

                <h2 style={h2}>3. Newsletters and marketing emails</h2>
                <p style={p}>
                  We only send newsletters to addresses that have opted in. Every marketing email
                  contains a one-click unsubscribe link at the footer. Once you unsubscribe, we stop
                  sending immediately; we retain a minimal record of the request solely to ensure
                  you are not contacted again by mistake.
                </p>

                <h2 style={h2}>4. Sharing within the group and with processors</h2>
                <p style={p}>
                  Your data may be shared among A&D Group member companies where necessary to
                  handle your request. We also use service providers for email delivery and hosting,
                  who act strictly on our instructions. We do not sell personal data to third parties.
                </p>

                <h2 style={h2}>5. Retention</h2>
                <p style={p}>
                  We retain personal data only as long as necessary for the purpose it was collected,
                  or as required by law — including retention obligations applicable to legal and
                  accounting records.
                </p>

                <h2 style={h2}>6. Your rights</h2>
                <p style={p}>
                  You have the right to access, correct, delete, restrict or object to the processing
                  of your personal data, to withdraw consent at any time, and to lodge a complaint with
                  the competent authority. To exercise these rights, email{' '}
                  <a href={`mailto:${EMAIL}`} style={a}>{EMAIL}</a>. We respond within the statutory time limit.
                </p>

                <h2 style={h2}>7. Security</h2>
                <p style={p}>
                  We apply appropriate technical and organisational measures, including encrypted
                  transmission and role-based access control, to protect personal data against
                  unauthorised access, alteration or disclosure.
                </p>

                <h2 style={h2}>8. Cookies</h2>
                <p style={p}>
                  Our websites use cookies for basic operation and traffic analysis. You may block or
                  delete cookies in your browser settings; some features may not work as intended
                  if you do so.
                </p>

                <h2 style={h2}>9. Contact</h2>
                <p style={p}>
                  For any privacy question, contact A&D Group at{' '}
                  <a href={`mailto:${EMAIL}`} style={a}>{EMAIL}</a> or {DIA_CHI_EN}.
                </p>
              </>
            ) : (
              <>
                <p style={p}>
                  Chính sách này giải thích cách A&D Group và các công ty thành viên — A&D Law Firm,
                  A&D Accounting &amp; Tax và A&D Tech — thu thập, sử dụng và bảo vệ dữ liệu cá nhân
                  của bạn, theo <strong>Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15</strong>,
                  có hiệu lực từ ngày 01/01/2026.
                </p>

                <h2 style={h2}>1. Thông tin chúng tôi thu thập</h2>
                <p style={p}>
                  Chúng tôi thu thập thông tin bạn chủ động cung cấp: họ tên, địa chỉ email, số điện
                  thoại, tên doanh nghiệp và nội dung yêu cầu. Ngoài ra, chúng tôi thu thập dữ liệu
                  kỹ thuật thông qua cookies và công cụ phân tích truy cập, ví dụ trang đã xem và
                  thời gian truy cập.
                </p>

                <h2 style={h2}>2. Mục đích sử dụng</h2>
                <p style={p}>
                  Dữ liệu được dùng để phản hồi yêu cầu, cung cấp dịch vụ bạn đề nghị, gửi bản tin và
                  thông tin chuyên môn khi bạn đã đồng ý, cải thiện chất lượng website, và thực hiện
                  các nghĩa vụ theo quy định pháp luật.
                </p>

                <h2 style={h2}>3. Bản tin và thư điện tử tiếp thị</h2>
                <p style={p}>
                  Chúng tôi chỉ gửi bản tin tới địa chỉ đã đăng ký nhận. Mọi thư tiếp thị đều có liên
                  kết huỷ đăng ký ở cuối thư, chỉ cần một lần bấm. Khi bạn huỷ, chúng tôi ngừng gửi
                  ngay và chỉ lưu tối thiểu thông tin về yêu cầu huỷ nhằm bảo đảm không liên hệ lại
                  do nhầm lẫn.
                </p>

                <h2 style={h2}>4. Chia sẻ trong tập đoàn và với bên xử lý dữ liệu</h2>
                <p style={p}>
                  Dữ liệu của bạn có thể được chia sẻ giữa các công ty thành viên A&D Group trong
                  phạm vi cần thiết để xử lý yêu cầu. Chúng tôi cũng sử dụng nhà cung cấp dịch vụ gửi
                  thư điện tử và lưu trữ, các đơn vị này chỉ xử lý dữ liệu theo chỉ dẫn của chúng tôi.
                  Chúng tôi không bán dữ liệu cá nhân cho bên thứ ba.
                </p>

                <h2 style={h2}>5. Thời hạn lưu trữ</h2>
                <p style={p}>
                  Chúng tôi chỉ lưu dữ liệu cá nhân trong thời gian cần thiết cho mục đích đã thu
                  thập, hoặc theo thời hạn mà pháp luật yêu cầu — bao gồm nghĩa vụ lưu trữ áp dụng
                  đối với hồ sơ pháp lý và chứng từ kế toán.
                </p>

                <h2 style={h2}>6. Quyền của bạn</h2>
                <p style={p}>
                  Bạn có quyền truy cập, chỉnh sửa, xoá, hạn chế hoặc phản đối việc xử lý dữ liệu cá
                  nhân, rút lại sự đồng ý bất cứ lúc nào, và khiếu nại tới cơ quan có thẩm quyền. Để
                  thực hiện các quyền này, vui lòng gửi email tới{' '}
                  <a href={`mailto:${EMAIL}`} style={a}>{EMAIL}</a>. Chúng tôi phản hồi trong thời hạn
                  luật định.
                </p>

                <h2 style={h2}>7. Bảo mật</h2>
                <p style={p}>
                  Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý phù hợp, bao gồm mã hoá đường
                  truyền và phân quyền truy cập theo vai trò, nhằm bảo vệ dữ liệu cá nhân khỏi việc
                  truy cập, thay đổi hoặc tiết lộ trái phép.
                </p>

                <h2 style={h2}>8. Cookies</h2>
                <p style={p}>
                  Website sử dụng cookies phục vụ vận hành cơ bản và phân tích lưu lượng truy cập. Bạn
                  có thể chặn hoặc xoá cookies trong thiết lập trình duyệt; một số tính năng có thể
                  không hoạt động đúng nếu bạn thực hiện việc này.
                </p>

                <h2 style={h2}>9. Liên hệ</h2>
                <p style={p}>
                  Mọi thắc mắc về bảo mật dữ liệu, vui lòng liên hệ A&D Group qua email{' '}
                  <a href={`mailto:${EMAIL}`} style={a}>{EMAIL}</a> hoặc địa chỉ {DIA_CHI_VI}.
                </p>
              </>
            )}

          </div>
        </div>
      </section>
    </>
  )
}
