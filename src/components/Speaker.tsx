export default function Speaker() {
  return (
    <section style={{ padding: '7rem 1.5rem', background: 'linear-gradient(180deg, #c87040 0%, #d4845a 35%, #e0a070 65%, #c89060 100%)', color: '#ffffff' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {/* ラベル */}
        <p
          className="text-center font-bold tracking-widest uppercase mb-4"
          style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}
        >
          Speaker
        </p>
        {/* 見出し */}
        <h2
          className="font-black text-center mb-16"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#ffffff', lineHeight: 1.3 }}
        >
          登壇者紹介
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* 顔写真：2〜3倍に拡大 */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src="/speaker_transparent.png"
              alt="原田 真之"
              style={{
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top center',
                border: '3px solid rgba(255,255,255,0.5)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            {/* 名前・肩書き */}
            <p
              className="font-black mb-1"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#ffffff' }}
            >
              原田 真之
            </p>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}>
              株式会社TUKURO 取締役
            </p>

            {/* ストーリー型プロフィール */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p className="text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 2.0 }}>
                サイバーエージェントにて11年間、インターネット広告事業に従事。累計100社以上の企業に対し、戦略立案から実行まで一気通貫のマーケティング支援を行い、売上最大20倍の成長を実現。
              </p>
              <p className="text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 2.0 }}>
                現在は株式会社TUKUROにて、検索・広告・AIアルゴリズムの構造解析に基づく集客設計を専門とし、多店舗企業のAI検索対策を支援している。自ら実店舗経営にも挑戦しながら、机上ではない現場視点を磨き続けている。
              </p>
            </div>

            {/* 補足実績 */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {[
                'サイバーエージェントにて11年在籍',
                '累計100社以上のマーケティング戦略立案・実行支援',
                '売上最大20倍の成長支援実績',
                '営業組織立ち上げ・マネジメント経験',
              ].map((c, i) => (
                <div key={i} className="flex gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>—</span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 区切り */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', marginTop: '5rem', paddingTop: '5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <p className="font-bold text-sm mb-3" style={{ color: '#ffffff' }}>【会社概要】</p>
              <p className="text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.9 }}>
                株式会社TUKUROは、「日本の価値を世界のチカラに」をミッションに掲げる、実装型マーケティング企業です。
                検索・広告・AIアルゴリズムを構造的に解析し、再現性ある集客設計を行います。自ら実店舗経営にも挑戦することで、机上ではない現場視点を磨き続けています。
              </p>
              <p className="text-sm leading-loose mt-3" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.9 }}>
                ツール提供だけでなく、思想と実践を両立すること。それがTUKUROの強みです。
              </p>
            </div>
            <div>
              <p className="font-bold text-sm mb-3" style={{ color: '#ffffff' }}>【開発背景】</p>
              <p className="text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.9 }}>
                AI検索やGoogleビジネスプロフィール（GMB）の重要性が高まり、多くの店舗が対策に取り組む時代になりました。
                TUKURO自身も実店舗を経営する中で、既存のMEO・LLMO・AIOツールでは多店舗経営に必要な機能が分散し、複数契約や管理負担が発生するという構造的な課題に直面しました。
              </p>
              <p className="text-sm leading-loose mt-3" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.9 }}>
                重要なのは、単なる対策ではなく、最新アルゴリズムを理解し、それを店舗運営の現場に落とし込むこと。
                その課題を解決するために開発されたのが「Michibiki（導き）」です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
