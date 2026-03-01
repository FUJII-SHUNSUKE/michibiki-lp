import { useState } from 'react'

const faqs = [
  {
    q: 'ウェビナーはどのように視聴できますか？',
    a: 'お申し込み後にZoomのURLをメールでお送りします。当日はそのURLからご参加ください。Zoomアカウントは不要です。',
  },
  {
    q: '途中参加・途中退出は可能ですか？',
    a: '可能です。ご都合に合わせてご参加ください。ただし、特典配布は終了時のご案内となります。',
  },
  {
    q: '資料はもらえますか？',
    a: '参加者特典としてPDF資料をご用意しています。ウェビナー終了後、メールにてお送りします。',
  },
  {
    q: '録画視聴はできますか？',
    a: '当日参加者を優先としており、録画の一般配布は予定していません。ご都合の悪い方は次回開催をお待ちください。',
  },
  {
    q: 'どんな企業が参加していますか？',
    a: '飲食・美容・小売・サービス業を中心に、5〜500店舗規模の多店舗展開企業の方にご参加いただいています。',
  },
  {
    q: 'ウェビナー後に「導き」の契約を迫られますか？',
    a: 'ありません。ウェビナーはあくまで情報提供の場です。ご興味をお持ちの方にのみ、後日個別のご案内をいたします。',
  },
  {
    q: '複数名での参加は可能ですか？',
    a: '可能です。それぞれのメールアドレスでのご登録をお願いします。',
  },
  {
    q: '申込後のキャンセルは可能ですか？',
    a: '可能です。お申し込み確認メールの返信にてご連絡ください。',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #fffaf5 0%, #fdf6ee 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: '#8090a8', letterSpacing: '0.2em' }}
        >
          FAQ
        </p>
        <h2
          className="font-black text-center mb-12"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#0D1B2A', lineHeight: 1.3 }}
        >
          よくあるご質問
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e4e6e8',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left transition-colors duration-150"
                style={{ background: 'transparent' }}
              >
                <span className="flex gap-3 text-sm font-semibold" style={{ color: '#0D1B2A' }}>
                  <span className="font-bold flex-shrink-0" style={{ color: '#1A2E4A' }}>Q.</span>
                  {faq.q}
                </span>
                {/* SVG矢印アイコン */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0 ml-4 transition-transform duration-200"
                  style={{
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: '#8090a8',
                  }}
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div
                  className="px-6 pb-5 text-sm leading-loose"
                  style={{
                    color: '#5a6a7a',
                    borderTop: '1px solid #e4e6e8',
                    paddingTop: '1rem',
                  }}
                >
                  <span className="font-bold mr-2" style={{ color: '#1A2E4A' }}>A.</span>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
