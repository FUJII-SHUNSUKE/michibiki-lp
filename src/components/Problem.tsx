const problems = [
  {
    text: 'AI検索（ChatGPT・Perplexity）で競合は出てくるのに、自社の店舗が表示されない',
    detail: 'AI検索は独自のデータソースを参照するため、Google対策だけでは届きません。競合との差は静かに、確実に広がっています。',
  },
  {
    text: 'LLMO・AIO対策が必要だとわかっていても、何から手をつければいいかわからない',
    detail: '情報は多いが実践的な手順がなく、担当者が動けない——そのまま放置が続き、対応が後手に回るケースがほとんどです。',
  },
  {
    text: 'GoogleだけでなくAI検索にも対応しなければと思いつつ、店舗数が多くて手が回らない',
    detail: '店舗数が増えるほど、管理すべき媒体と情報量が膨大になります。人手で対応するには限界があります。',
  },
  {
    text: 'AI検索に自社の正確な情報を認識させる方法がわからず、誤情報が出回るリスクを感じている',
    detail: 'GoogleやAIは第三者が提案した情報を採用することがあります。誰も気づかないまま、誤った情報が検索結果に出続けるケースも。',
  },
  {
    text: '既存のMEOツールではAI検索への対応がカバーできず、ツール乗り換えを検討している',
    detail: '従来のMEOツールはGoogleビジネスプロフィールが中心設計です。AI検索時代の125媒体対応には、別の仕組みが必要です。',
  },
]

export default function Problem() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#1E3A5F' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2
          className="font-black text-center mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#F5F0E8', lineHeight: 1.3 }}
        >
          こんな課題を抱えていませんか？
        </h2>
        <p className="text-center text-sm mb-14 leading-loose" style={{ color: '#8aabcc' }}>
          AI検索の普及により、多店舗経営の集客課題は新たなフェーズに入っています。<br />
          対応が遅れるほど、競合との差は広がる一方です。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex gap-5"
              style={{
                padding: '1.6rem 0',
                borderBottom: i < problems.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}
            >
              {/* チェックボックス風（CSS描画） */}
              <div style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    border: '2px solid rgba(255,255,255,0.25)',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div>
                <p className="font-bold text-sm mb-2" style={{ color: '#F5F0E8', lineHeight: 1.6 }}>
                  {p.text}
                </p>
                <p className="text-xs leading-loose" style={{ color: '#8aabcc' }}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm leading-loose" style={{ color: '#a0bcda' }}>
          これらの課題は、すべて<span className="font-bold" style={{ color: '#F5F0E8' }}>「仕組み」</span>で解決できます。<br />
          このウェビナーでは、多店舗展開企業が実践するAI時代の集客戦略を余すところなく公開します。
        </p>
      </div>
    </section>
  )
}
