const agenda = [
  {
    time: '0〜5分',
    title: 'オープニング',
    desc: '本日の流れと登壇者紹介',
  },
  {
    time: '5〜20分',
    title: 'AI検索時代の店舗集客、何が変わるのか',
    desc: 'ChatGPT・Perplexityが店舗を選ぶ仕組みと、LLMO・AIOとは何かを解説。Googleだけでは届かない「新しい検索」の実態。',
  },
  {
    time: '20〜35分',
    title: '多店舗経営で起きている「情報管理」の落とし穴',
    desc: '知らないうちに起きている情報改ざんの実例。店舗数増加とともに拡大する管理コストと、口コミ放置が引き起こす影響。',
  },
  {
    time: '35〜50分',
    title: '「導き」が実現する自動化と、具体的な成果',
    desc: '125媒体へのサイテーション対策の全貌。全店舗一元管理ダッシュボードのデモ。導入企業の成果データを公開。',
  },
  {
    time: '50〜60分',
    title: '質疑応答',
    desc: '参加者からの個別質問にリアルタイムで回答します。',
  },
]

const learnings = [
  'AI検索（LLMO・AIO）の基本と、店舗集客への影響が理解できる',
  '多店舗特有の情報管理リスクと、その防止策がわかる',
  '口コミ管理を自動化する具体的な方法が手に入る',
  '導入企業の成果データをもとに、ROIのイメージが持てる',
  '自社に合った集客改善の優先順位が明確になる',
]

export default function Agenda() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #4a6a8a 0%, #6a7a8a 40%, #8a7a6a 70%, #c09070 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}
        >
          Agenda
        </p>
        <h2
          className="font-black text-center mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#ffffff', lineHeight: 1.3 }}
        >
          このウェビナーで学べること
        </h2>
        <p className="text-center text-sm mb-12 leading-loose" style={{ color: 'rgba(255,255,255,0.75)' }}>
          60分間で、AI検索時代の店舗集客戦略を体系的に理解できます。<br />
          理論だけでなく、実際の成果データと運用事例もあわせて公開します。
        </p>

        {/* アジェンダリスト */}
        <div className="mb-12">
          {agenda.map((item, i) => (
            <div
              key={i}
              className="flex"
              style={{
                borderBottom: i < agenda.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                padding: '1.4rem 0',
              }}
            >
              <div style={{ width: '5.5rem', flexShrink: 0, paddingRight: '1.2rem', paddingTop: '0.1rem' }}>
                <p className="font-bold text-xs leading-tight" style={{ color: '#ffb07a' }}>
                  {item.time}
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-bold text-sm mb-1.5" style={{ color: '#ffffff' }}>{item.title}</p>
                <p className="text-xs leading-loose" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 参加して得られること */}
        <div
          className="rounded-2xl mb-12"
          style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.2)', padding: '2rem 2rem' }}
        >
          <p className="font-bold text-sm mb-5" style={{ color: '#ffffff' }}>参加すると得られること</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {learnings.map((l, i) => (
              <li key={i} className="flex gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="#ffb07a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {l}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#form"
            className="inline-block font-black text-white rounded-full transition-all duration-200 hover:scale-105"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              padding: '1.1rem 2.5rem',
              background: 'linear-gradient(135deg, #E8640A 0%, #c8490a 100%)',
              boxShadow: '0 10px 48px rgba(232,100,10,0.5)',
            }}
          >
            60分でAI集客戦略を手に入れる（参加無料）
          </a>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>所要30秒・参加費無料</p>
        </div>
      </div>
    </section>
  )
}
