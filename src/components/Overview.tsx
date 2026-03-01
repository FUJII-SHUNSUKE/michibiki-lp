const sessions = [
  { date: '3月5日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '3月10日（月）', time: '16:00〜17:00', status: 'full' },
  { date: '3月12日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '3月19日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '3月26日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '4月2日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '4月9日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '4月16日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '4月23日（木）', time: '16:00〜17:00', status: 'open' },
  { date: '4月30日（木）', time: '16:00〜17:00', status: 'open' },
]

const details = [
  { label: '開催形式', value: 'オンライン（Zoom）' },
  { label: '参加費', value: '無料', accent: true },
  { label: '所要時間', value: '60分（プレゼン45分＋質疑15分）' },
  { label: '対象者', value: '5店舗以上の多店舗展開企業の経営者・マーケティング責任者・集客担当者' },
  { label: '定員', value: '各回 先着50名' },
  { label: '申込締切', value: '各回 前日17:00まで' },
]

export default function Overview() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #fdf6ed 0%, #fff8f2 50%, #fffaf5 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: '#8090a8', letterSpacing: '0.2em' }}
        >
          Overview
        </p>
        <h2
          className="font-black text-center mb-12"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#0D1B2A', lineHeight: 1.3 }}
        >
          開催概要
        </h2>

        {/* 日程一覧 */}
        <div className="mb-10">
          <h3
            className="text-sm font-bold mb-4 flex items-center gap-2"
            style={{ color: '#3a4a5a' }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1rem',
                background: '#E8640A',
                borderRadius: '2px',
                flexShrink: 0,
              }}
            />
            開催日程（2026年）— 毎週木曜 定期開催
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {sessions.map((s) => (
              <div
                key={s.date}
                className="flex items-center justify-between px-5 py-3 rounded-xl border text-sm"
                style={
                  s.status === 'full'
                    ? { background: '#f6f7f8', borderColor: '#e0e2e4', opacity: 0.6 }
                    : { background: '#f8fafe', borderColor: '#d8e4f0' }
                }
              >
                <span className="font-bold" style={{ color: '#0D1B2A' }}>
                  {s.date}
                  <span className="ml-2 font-normal" style={{ color: '#5a6a7a' }}>{s.time}</span>
                </span>
                {s.status === 'full' ? (
                  <span
                    className="text-xs font-bold whitespace-nowrap"
                    style={{
                      background: '#b0bcc8',
                      color: '#fff',
                      padding: '0.2rem 0.7rem',
                      borderRadius: '999px',
                    }}
                  >
                    満員御礼
                  </span>
                ) : (
                  <span
                    className="text-xs font-bold whitespace-nowrap"
                    style={{
                      background: 'transparent',
                      color: '#1A2E4A',
                      border: '1px solid #b0c4d8',
                      padding: '0.2rem 0.7rem',
                      borderRadius: '999px',
                    }}
                  >
                    受付中
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 詳細テーブル */}
        <div
          className="rounded-2xl overflow-hidden mb-12"
          style={{ border: '1px solid #e4e8ec' }}
        >
          {details.map((r, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row"
              style={{ background: i % 2 === 0 ? '#f8f9fb' : '#ffffff' }}
            >
              <div
                className="sm:w-40 px-6 py-4 text-sm font-bold flex-shrink-0"
                style={{
                  color: '#3a4a5a',
                  borderBottom: '1px solid #eaecee',
                  borderRight: 'none',
                }}
              >
                {r.label}
              </div>
              <div
                className="px-6 py-4 text-sm leading-relaxed"
                style={{ color: '#0D1B2A', borderBottom: '1px solid #eaecee' }}
              >
                {r.accent ? (
                  <span className="font-bold" style={{ color: '#E8640A', fontSize: '1rem' }}>{r.value}</span>
                ) : (
                  r.value
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#form"
            className="inline-block font-black text-white rounded-full transition-all duration-200 hover:scale-105"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              padding: '1.1rem 2.5rem',
              background: 'linear-gradient(135deg, #E8640A 0%, #c8490a 100%)',
              boxShadow: '0 10px 40px rgba(232,100,10,0.35)',
            }}
          >
            60分でAI集客戦略を手に入れる（参加無料）
          </a>
          <p className="mt-3 text-xs" style={{ color: '#8090a8' }}>各回 先着50名｜申込締切：各回 前日17:00まで</p>
        </div>
      </div>
    </section>
  )
}
