const topics = { content: 'Nội dung bài học', interface: 'Giao diện', features: 'Công cụ thực hành', other: 'Khác' };
const json = (data, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });

export default {
  async fetch(request) {
    if (request.method !== 'POST') return json({ ok: false, message: 'Chỉ hỗ trợ phương thức POST.' }, 405);
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) return json({ ok: false, message: 'Nguồn gửi không hợp lệ.' }, 403);
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return json({ ok: false, message: 'Dữ liệu phải ở dạng JSON.' }, 415);
    const len = Number(request.headers.get('content-length') || 0);
    if (len > 4096) return json({ ok: false, message: 'Nội dung yêu cầu quá lớn.' }, 413);

    let body;
    try {
      const raw = await request.text();
      if (raw.length > 4096) return json({ ok: false, message: 'Nội dung yêu cầu quá lớn.' }, 413);
      body = JSON.parse(raw);
    } catch { return json({ ok: false, message: 'Dữ liệu JSON không hợp lệ.' }, 400); }

    if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ ok: false, message: 'Dữ liệu không hợp lệ.' }, 400);
    if (body.website) return json({ ok: true, message: 'Đã tiếp nhận góp ý của bạn.' }); // Honeypot: không gửi email
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const topic = typeof body.topic === 'string' ? body.topic : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (name.length < 2 || name.length > 60 || !Object.hasOwn(topics, topic) || message.length < 10 || message.length > 500) {
      return json({ ok: false, message: 'Vui lòng kiểm tra tên, chủ đề và nội dung góp ý.' }, 400);
    }

    const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      console.error('Missing contact email environment configuration');
      return json({ ok: false, message: 'Hệ thống gửi email chưa được cấu hình.' }, 503);
    }

    try {
      const result = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: CONTACT_FROM_EMAIL,
          to: [CONTACT_TO_EMAIL],
          subject: `[Learn Web] Góp ý: ${topics[topic]}`,
          text: `Góp ý mới từ Learn Web\n\nTên hiển thị: ${name}\nChủ đề: ${topics[topic]}\n\nNội dung:\n${message}\n\n---\nĐược gửi từ biểu mẫu contact.html của Learn Web.`
        })
      });
      if (!result.ok) {
        console.error('Resend delivery API failed:', result.status, await result.text());
        return json({ ok: false, message: 'Chưa gửi được email. Vui lòng thử lại sau.' }, 502);
      }
      return json({ ok: true, message: 'Góp ý đã được chuyển đến hệ thống email. Cảm ơn bạn!' });
    } catch (error) {
      console.error('Contact email request failed:', error);
      return json({ ok: false, message: 'Không thể kết nối dịch vụ email. Vui lòng thử lại.' }, 502);
    }
  }
};
