const cases = [
  {
    industry: '飲食チェーン',
    scale: '多店舗展開',
    result:
      '全店舗のGBP情報を一元管理し、Googleの表示回数が導入3ヶ月で約3倍に改善。本部スタッフ1名で全店の情報管理が完結するようになった。',
  },
  {
    industry: '美容室チェーン',
    scale: '多店舗展開',
    result:
      'Instagramとの連携で投稿工数を半減。口コミ返信率が導入前の30%から100%に向上し、評価スコアが平均0.4ポイント改善した。',
  },
  {
    industry: '小売チェーン',
    scale: '多店舗展開',
    result:
      'Apple Mapの自動登録でiPhoneユーザーからの来店が新たに発生。インバウンド顧客の獲得にも貢献。',
  },
]

export default function SocialProof() {
  return (
    /* 朝焼けゾーン：オレンジ〜アンバーの暖かい光 */
    <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(180deg, #c87850 0%, #b86c44 40%, #a86040 70%, #c87040 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* ラベル */}
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}
        >
          Results
        </p>
        {/* 見出し */}
        <h2
          className="font-black text-center mb-14"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#ffffff', lineHeight: 1.3 }}
        >
          導入企業の声と、実際の成果
        </h2>

        {/* KPI帯：白カードにして可読性確保 */}
        <div
          className="rounded-2xl mb-14"
          style={{
            background: 'rgba(255,255,255,0.95)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem 3rem',
            boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          }}
        >
          {[
            { value: '満足度100%', label: '先行導入社アンケート' },
            { value: '継続率100%', label: '実証実験での継続意向' },
            { value: '問い合わせ急増中', label: '月間相談件数 前月比3倍' },
            { value: '先行枠 受付中', label: '導入サポート無料期間' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-black leading-none mb-2"
                style={{ fontSize: 'clamp(1.3rem, 2.8vw, 1.8rem)', color: '#d45a20' }}
              >
                {s.value}
              </p>
              <p className="text-xs" style={{ color: '#7a5a4a' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* 導入事例：白カードで視認性確保 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.92)',
                borderRadius: '14px',
                padding: '1.4rem 1.6rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
              }}
            >
              {/* 業種ラベル */}
              <span
                className="inline-block text-xs font-bold rounded-full mb-3"
                style={{
                  background: '#fdeee4',
                  color: '#d45a20',
                  padding: '0.25rem 0.75rem',
                  letterSpacing: '0.02em',
                }}
              >
                {c.industry}
              </span>
              {/* 証言テキスト */}
              <p className="text-sm leading-loose" style={{ color: '#3a2a20' }}>
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
