export default function FinalCta() {
  return (
    <section style={{ padding: '7rem 1.5rem', background: 'linear-gradient(160deg, #d4783a 0%, #9a4820 30%, #5a2a18 60%, #1a2840 85%, #0f1f35 100%)', color: '#ffffff' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          className="font-black mb-6"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#F5F0E8', lineHeight: 1.4 }}
        >
          AI検索時代の集客対策、<br />始めるなら今です。
        </h2>
        <p className="text-sm mb-16 leading-loose" style={{ color: 'rgba(255,255,255,0.82)' }}>
          ChatGPTやPerplexityに選ばれる店舗と、無視される店舗の差は、<br />
          今この瞬間にも広がっています。<br />
          60分のウェビナーで、その差を埋める具体策を手に入れてください。
        </p>

        <a
          href="#form"
          className="inline-block font-black text-white rounded-full transition-all duration-200 hover:scale-105"
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            padding: '1.2rem 3rem',
            background: 'linear-gradient(135deg, #E8640A 0%, #c8490a 100%)',
            boxShadow: '0 12px 48px rgba(232,100,10,0.40)',
          }}
        >
          60分でAI集客戦略を手に入れる（参加無料）
        </a>

        <p className="text-sm mt-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
          申込は30秒で完了します。参加費は一切かかりません。
        </p>
        <p className="mt-4 font-bold text-sm" style={{ color: '#F5F0E8', opacity: 0.6 }}>
          定員50名・残りわずか｜申込締切：各回 前日17:00まで
        </p>
      </div>
    </section>
  )
}
