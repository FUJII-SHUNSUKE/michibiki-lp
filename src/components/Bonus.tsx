const bonuses = [
  {
    num: '01',
    title: 'AI集客チェックリスト（PDF・非売品）',
    desc: '自社の現状を診断できる30項目のセルフチェックシート。参加翌日からすぐに使えます。',
  },
  {
    num: '02',
    title: 'LLMO・AIO対策ロードマップ（PDF）',
    desc: '優先順位と実行ステップをまとめた実践ガイド。どこから動けばいいかが一目でわかります。',
  },
  {
    num: '03',
    title: '個別オンライン相談（30分・無料）',
    desc: 'ウェビナー参加者限定で、1社1回の個別相談枠を提供。自社の課題に特化したアドバイスが受けられます。',
  },
]

export default function Bonus() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #c89060 0%, #e0a870 40%, #f0bc80 70%, #f5c888 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: 'rgba(100,50,10,0.6)', letterSpacing: '0.2em' }}
        >
          Special Bonus
        </p>
        <h2
          className="font-black text-center mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#3a1800', lineHeight: 1.3 }}
        >
          ウェビナー参加者限定の特典
        </h2>
        <p className="text-center text-sm mb-12 leading-loose" style={{ color: 'rgba(80,30,0,0.7)' }}>
          これらの特典は、当日参加者のみにご提供します。<br />
          録画視聴では受け取れないコンテンツです。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bonuses.map((b) => (
            <div
              key={b.num}
              className="flex gap-6"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.8)',
                borderRadius: '14px',
                padding: '1.6rem 1.8rem',
              }}
            >
              {/* 番号 */}
              <span
                className="font-black flex-shrink-0"
                style={{ fontSize: '1.4rem', color: 'rgba(180,70,10,0.4)', lineHeight: 1, marginTop: '0.1rem' }}
              >
                {b.num}
              </span>
              <div>
                <p className="font-bold text-sm mb-2" style={{ color: '#2a1000' }}>{b.title}</p>
                <p className="text-xs leading-loose" style={{ color: 'rgba(60,25,0,0.75)' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
