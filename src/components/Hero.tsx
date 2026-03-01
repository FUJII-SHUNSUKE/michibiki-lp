export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(150deg, #0f1f35 0%, #1a3355 35%, #2a4a72 60%, #7a3820 85%, #c25a20 100%)',
      }}
    >
      {/* 暁の光彩：右下からオレンジ光が差す */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '800px',
          height: '800px',
          right: '-180px',
          bottom: '-200px',
          background: 'radial-gradient(circle, rgba(220,100,30,0.22) 0%, rgba(180,70,20,0.10) 40%, transparent 70%)',
        }}
      />
      {/* 左上：深い紺の落ち着き */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          left: '-150px',
          top: '-150px',
          background: 'radial-gradient(circle, rgba(20,50,100,0.5) 0%, transparent 70%)',
        }}
      />

      {/* ===== コンテンツ：センター配置 ===== */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-28 text-center"
      >
        <div style={{ maxWidth: '760px', width: '100%' }}>

          {/* ラベルバッジ */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10"
            style={{
              background: 'rgba(232,100,10,0.12)',
              border: '1px solid rgba(232,100,10,0.35)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#E8640A' }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: '#E8640A' }}
            >
              無料オンラインウェビナー
            </span>
          </div>

          {/* サブ見出し（小さく上部） */}
          <p
            className="mb-3"
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: 300,
              color: '#9ab8d8',
              letterSpacing: '0.03em',
            }}
          >
            Googleマップの次は
          </p>

          {/* メインコピー（最大・極太・1行） */}
          <h1
            className="font-black leading-none mb-6 whitespace-nowrap"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', color: '#FFFFFF', letterSpacing: '-0.02em' }}
          >
            「AI検索」対策。
          </h1>

          {/* 対象者明示 */}
          <p
            className="mb-5"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              color: '#9ab0cc',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}
          >
            5店舗以上の多店舗経営者のための、60分集中ウェビナー
          </p>

          {/* サブコピー */}
          <div className="mb-12" style={{ display: 'inline-block' }}>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                fontWeight: 300,
                color: '#b8cce0',
                lineHeight: 1.8,
              }}
            >
              累計100社以上を支援してきたマーケターが解説する、
            </p>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                fontWeight: 700,
                color: '#F5F0E8',
                lineHeight: 1.8,
              }}
            >
              AIに選ばれ、勝手に客が集まる「情報整備」の正解。
            </p>
          </div>

          {/* 区切りライン */}
          <div
            style={{
              width: '40px',
              height: '2px',
              background: 'rgba(232,100,10,0.5)',
              margin: '0 auto 2.5rem',
            }}
          />

          {/* イベント情報 */}
          <div
            className="rounded-2xl mb-12 text-left"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.16)',
              backdropFilter: 'blur(8px)',
              padding: '1.5rem 2rem',
              display: 'inline-block',
              width: '100%',
              maxWidth: '520px',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: '開催日時', body: '毎週木曜 16:00〜17:00（定期開催）', highlight: '毎週木曜' },
                { label: '次回開催', body: '2026年3月5日（木）16:00〜17:00' },
                { label: '形式', body: 'オンライン（Zoom）', extra: '参加費：無料', accent: true },
                { label: '定員', body: '各回 先着50名' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm">
                  {/* アイコンの代わりにシンプルなライン */}
                  <span
                    style={{
                      width: '3px',
                      height: '1.2em',
                      background: '#E8640A',
                      flexShrink: 0,
                      marginTop: '0.15em',
                      borderRadius: '2px',
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ color: '#b8d0e8' }}>
                    <span className="font-bold" style={{ color: '#F5F0E8' }}>{item.label}：</span>
                    {item.accent ? (
                      <>オンライン（Zoom）｜参加費：<span className="font-bold" style={{ color: '#E8640A' }}>無料</span></>
                    ) : (
                      item.body
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mb-5">
            <a
              href="#form"
              className="inline-block font-black text-white rounded-full transition-all duration-200 hover:scale-105"
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                padding: '1.1rem 2.8rem',
                background: 'linear-gradient(135deg, #E8640A 0%, #c8490a 100%)',
                boxShadow: '0 12px 48px rgba(232,100,10,0.40)',
              }}
            >
              60分でAI集客戦略を手に入れる（参加無料）
            </a>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#7090b8' }}>所要30秒・キャンセルはいつでも可能</p>

          {/* 区切り */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.14)',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* 実績 */}
            {[
              { title: '継続率100%', sub: '実証実験での継続意向' },
              { title: '先行満足度100%', sub: '先行導入社アンケート' },
              { title: '問い合わせ急増中', sub: '前月比3倍' },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <p className="font-black text-sm" style={{ color: '#F5F0E8' }}>{s.title}</p>
                <p style={{ fontSize: '0.7rem', color: '#7090b8' }}>{s.sub}</p>
              </div>
            ))}

            {/* 縦区切り */}
            <div style={{ width: '1px', height: '2rem', background: 'rgba(255,255,255,0.10)' }} className="hidden md:block" />

            {/* 登壇者（小円形） */}
            <div className="flex items-center gap-3">
              <img
                src="/speaker_transparent.png"
                alt="原田 真之"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  border: '2px solid rgba(232,100,10,0.5)',
                  flexShrink: 0,
                }}
              />
              <div className="text-left">
                <p className="text-xs font-bold" style={{ color: '#F5F0E8' }}>原田 真之</p>
                <p style={{ fontSize: '0.7rem', color: '#7090b8' }}>株式会社TUKURO 取締役</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
