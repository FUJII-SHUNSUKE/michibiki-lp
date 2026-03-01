const benefits = [
  { title: 'AI集客の方法が手に入る', desc: 'AI検索から新規来店客を獲得する具体的な方法が、60分で手に入る。' },
  { title: '情報管理の穴が明確になる', desc: '今すぐ修正すべき情報管理の穴が、この1時間で明確になる。' },
  { title: '口コミ自動化の方法がわかる', desc: '多店舗の口コミ・情報管理を自動化する方法と導線が具体的にわかる。' },
  { title: '実際の成果データを入手できる', desc: '表示回数3倍・売上5倍を実現した実際の導入事例と成果データを入手できる。' },
  { title: '実行ロードマップが描ける', desc: '自社に合った集客改善施策の優先順位と実行ロードマップが描けるようになる。' },
  { title: '限定資料がすぐ受け取れる', desc: '参加者限定の特典資料を、ウェビナー終了後すぐに受け取れる。' },
  { title: '専門家に直接質問できる', desc: '質疑応答で自社の個別課題について、専門家に直接質問できる。' },
]

export default function Benefits() {
  return (
    /* 曙ゾーン：暖色テラコッタへ転換する橋渡し */
    <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #c09070 0%, #c8845a 40%, #d0906a 70%, #c87850 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.2em' }}
        >
          Benefits
        </p>
        <h2
          className="font-black text-center mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#ffffff', lineHeight: 1.3 }}
        >
          参加すると、こんなことがわかります
        </h2>
        <p className="text-center text-sm mb-12 leading-loose" style={{ color: 'rgba(255,255,255,0.8)' }}>
          このウェビナーは、知識のインプットで終わりません。<br />
          参加後すぐに「何から動くべきか」が明確になる内容を設計しています。
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex gap-3"
              style={{
                background: 'rgba(255,255,255,0.18)',
                borderRadius: '12px',
                padding: '1.2rem 1.4rem',
                border: '1px solid rgba(255,255,255,0.28)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '0.1rem' }}>
                <path d="M3.5 9l4 4L14.5 5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="font-bold text-sm mb-1.5" style={{ color: '#ffffff' }}>{b.title}</p>
                <p className="text-xs leading-loose" style={{ color: 'rgba(255,255,255,0.78)' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
