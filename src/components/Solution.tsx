const keyMessages = [
  'AIに「言及される」店舗情報を、自動で整備する',
  '全店舗の口コミ・情報を、本部から一元管理する',
  '改ざん・情報不整合を、1時間ごとの監視で防ぐ',
]

export default function Solution() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #243F6A 0%, #2e4f80 60%, #3d5f8a 100%)', color: '#ffffff' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p
          className="font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: '#8aabcc', letterSpacing: '0.2em' }}
        >
          Solution
        </p>
        <h2
          className="font-black mb-5"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#F5F0E8', lineHeight: 1.3 }}
        >
          AI検索時代の多店舗集客を、一元化する。
        </h2>
        <p className="text-sm mb-4 leading-loose" style={{ color: '#b0ccde' }}>
          LLMO・AIO対策ツール「導き（みちびき）」は、多店舗展開企業の集客業務を自動化し、AI検索に選ばれる店舗づくりを支援するツールです。
        </p>
        <p className="text-xs mb-12 leading-loose" style={{ color: '#90aac0' }}>
          125以上の媒体へ情報を自動配信し、AI検索・Google・Apple Mapに一貫した店舗情報を届けます。口コミ管理からSNS連携まで、集客業務を丸ごと一元管理。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {keyMessages.map((msg, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-left"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '12px',
                padding: '1.1rem 1.5rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: '2px',
                  background: '#E8640A',
                  flexShrink: 0,
                  borderRadius: '2px',
                }}
              />
              <p className="text-sm font-semibold" style={{ color: '#e8f2fc' }}>{msg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
