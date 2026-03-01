const stats = [
  { value: '満足度100%', label: '先行導入社アンケート' },
  { value: '継続率100%', label: '実証実験での継続意向' },
  { value: '問い合わせ急増中', label: '月間相談件数 前月比3倍' },
  { value: '先行枠 受付中', label: '導入サポート無料期間' },
]

export default function StatsBanner() {
  return (
    <div
      style={{
        background: '#1B3050',
        borderTop: '1px solid rgba(255,255,255,0.10)',
        borderBottom: '1px solid rgba(255,255,255,0.10)',
        padding: '2.5rem 1rem',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10 md:gap-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p
              className="font-black leading-none mb-2"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#E8640A',
                letterSpacing: '-0.01em',
              }}
            >
              {s.value}
            </p>
            <p className="text-xs" style={{ color: '#8aabcc' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
