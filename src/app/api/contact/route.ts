import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Thiếu thông tin bắt buộc." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "A&D Group Website <no-reply@andgroup.com.vn>",
      to: ["support@andgroup.com.vn"],
      replyTo: email,
      subject: `[Liên hệ] ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0C0C0C; padding: 28px 32px; margin-bottom: 0;">
            <p style="color: #C9A84C; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">A&D Group</p>
            <h1 style="color: #F7F3ED; font-size: 20px; font-weight: 500; margin: 0;">Form liên hệ mới</h1>
          </div>

          <div style="border: 1px solid #E5E0D8; border-top: none; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8; width: 140px;">
                  <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999;">Họ và tên</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8; font-size: 15px; color: #1a1a1a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8;">
                  <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #C9A84C;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8;">
                  <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999;">Công ty</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8; font-size: 15px; color: #1a1a1a;">${company}</td>
              </tr>` : ""}
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8;">
                  <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999;">Điện thoại</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8; font-size: 15px; color: #1a1a1a;">${phone}</td>
              </tr>` : ""}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8;">
                  <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999;">Dịch vụ</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F0EDE8; font-size: 15px; color: #1a1a1a;">${service}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; vertical-align: top; padding-top: 14px;">
                  <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999;">Nội dung</span>
                </td>
                <td style="padding: 10px 0; padding-top: 14px; font-size: 15px; color: #1a1a1a; line-height: 1.7;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
          </div>

          <div style="padding: 16px 32px; background: #F7F3ED; border: 1px solid #E5E0D8; border-top: none;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              Gửi từ andgroup.com.vn — Reply trực tiếp email này để trả lời khách hàng.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Gửi email thất bại." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Lỗi server." }, { status: 500 });
  }
}
